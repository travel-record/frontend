import {
  ReactElement,
  Suspense,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Icon } from '../../Icon';
import { useGetUser, useGtfOutFromFeed, useInviteUser } from '@/apis';
import { User } from '@/types/user';
import StyledProfile from './StyledComponent/StyledProfile';
import StyledModalBody from './StyledComponent/StyledModalBody';
import InputContainerFallback from './InputContainerFallback';

interface Props {
  writerId: number;
  feedId: number;
  contributors: User[];
  contributorsSetter: React.Dispatch<React.SetStateAction<User[]>>;
}

const InputContainer = ({
  writerId,
  feedId,
  contributors,
  contributorsSetter: setContributers,
}: Props) => {
  const [enabled, setEnabled] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const { data: userData } = useGetUser({ q: inputValue, enabled });
  const { mutate } = useInviteUser();
  const { mutate: gtfOut } = useGtfOutFromFeed();

  const handleClickSearch = useCallback(() => {
    setEnabled(true);
  }, []);

  const handleClickResultOnSuccess = () => {
    if (userData) {
      const newList = JSON.parse(JSON.stringify(contributors));
      setContributers([...newList, userData]);
      setInputValue('');
    }
  };
  const handleClickResult = useCallback(() => {
    if (userData) {
      if (contributors.findIndex((l) => l.userId === userData.userId) === -1) {
        mutate(
          { feedId: feedId.toString(), userToId: userData.userId },
          {
            onSuccess: () => {
              handleClickResultOnSuccess();
            },
          },
        );
      }
    }
  }, [userData]);

  const handleClickRemoveOnSuccess = (id: number) => {
    const newList: User[] = JSON.parse(JSON.stringify(contributors));
    const index = newList.findIndex((x) => x.userId === id);
    newList.splice(index, 1);

    if (index > -1) setContributers(newList);
  };
  const handleClickRemove = useCallback(
    (id: number) => {
      gtfOut(
        {
          feedId,
          userId: id,
        },
        {
          onSuccess: () => {
            handleClickRemoveOnSuccess(id);
          },
        },
      );
    },
    [gtfOut],
  );

  useEffect(() => {
    setEnabled(false);
  }, [userData]);

  return (
    <div className="input-wrapper">
      <div className="input-container">
        <input
          type="text"
          placeholder={'닉네임을 입력하세요'}
          id="input_text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="button"
          disabled={inputValue === ''}
          onClick={handleClickSearch}
        >
          초대
        </button>
      </div>
      <div className="input-result">
        {userData &&
          contributors.findIndex((x) => x.userId === userData?.userId) ===
            -1 && (
            <StyledProfile onClick={handleClickResult}>
              <div className="profile">
                {userData.imageUrl && <img src={userData.imageUrl} />}
                {!userData.imageUrl && (
                  <Icon iconType="profile" width={24} height={24} />
                )}
                <div className="name">{userData.nickname}</div>
              </div>
            </StyledProfile>
          )}
        <div className="user-list">
          {contributors.map((l) => (
            <StyledProfile onClick={handleClickResult} key={l.userId}>
              <div className="profile">
                {l.imageUrl && <img src={l.imageUrl} />}
                {!l.imageUrl && (
                  <Icon iconType="profile" width={24} height={24} />
                )}
                <div className="name">{l.nickname}</div>
              </div>
              <div
                style={{ display: writerId === l.userId ? 'none' : undefined }}
                onClick={() => handleClickRemove(l.userId)}
              >
                <Icon iconType="close" width={24} height={24} />
              </div>
            </StyledProfile>
          ))}
        </div>
      </div>
    </div>
  );
};

const InviteModifyFeedModalBody = ({
  writerId,
  feedId,
  contributors,
  contributorsSetter: setContributers,
}: Props): ReactElement => {
  return (
    <StyledModalBody>
      <div className="invite">
        <div className="title">사용자 초대</div>
        <Suspense fallback={<InputContainerFallback inputValue={''} />}>
          <InputContainer
            writerId={writerId}
            feedId={feedId}
            contributors={contributors}
            contributorsSetter={setContributers}
          />
        </Suspense>
      </div>
    </StyledModalBody>
  );
};

export default InviteModifyFeedModalBody;