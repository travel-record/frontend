import { TextareaInput } from '@components/common/TextareaInput';
import { NavBarBackBtn } from '@components/common/NavBar/NavBarBackBtn';
import { TextInput } from '@components/common/TextInput';
import { useState } from 'react';
import * as S from './style';
import { DateInput } from '@components/common/DateInput';
import { Satisfaction } from '@components/NewFeed/Satisfaction';
import { NewTitleImg } from '@components/NewFeed/NewTitleImg';
import { useNavigate } from 'react-router-dom';
import { NewFeedBtn } from '@components/NewFeed/NewFeedBtn';
export const NewFeed = () => {
  const [titleImgFile, setTitleImgFile] = useState<{
    imgFile: string;
    originFile: File | Blob | string;
  }>({
    imgFile: '',
    originFile: '',
  });
  const [titleImgUrl, setTitleImgUrl] = useState<string>(
    'https://trecordbucket.s3.ap-northeast-2.amazonaws.com/upload/trip2.png',
  );
  const [title, setTitle] = useState('');
  const [tripPlace, setTripPlace] = useState('');
  const [startAt, setStartAt] = useState('');
  const [endAt, setEndAt] = useState('');
  const [withPeople, setWithPeople] = useState('');
  const [tripIntroduce, setTripIntroduce] = useState('');
  const [satisfaction, setSatisfaction] = useState('');
  const navigate = useNavigate();

  return (
    <S.Layout>
      <NavBarBackBtn title="피드 만들기" isDark={true} />
      <NewTitleImg
        titleImgFile={setTitleImgFile}
        titleImgFileValue={titleImgFile}
      />
      <TextInput
        inputValue={title}
        inputSetValue={setTitle}
        labelTitle="제목"
        inputTitle="제목을 입력해주세요"
      />
      <TextInput
        inputValue={tripPlace}
        inputSetValue={setTripPlace}
        labelTitle="여행지"
        inputTitle="여행지를 입력해주세요"
      />
      <S.DateBox>
        <DateInput
          inputValue={startAt}
          inputSetValue={setStartAt}
          labelTitle="여행 시작 날짜"
        />
        <DateInput
          inputValue={endAt}
          inputSetValue={setEndAt}
          labelTitle="여행 끝나는 날짜"
        />
      </S.DateBox>
      <TextInput
        inputValue={withPeople}
        inputSetValue={setWithPeople}
        labelTitle="같이 간 사람"
        inputTitle="누구와 같이 갔나요?"
      />
      <TextareaInput
        inputValue={tripIntroduce}
        inputSetValue={setTripIntroduce}
        labelTitle="여행 설명"
        inputTitle="여행에 대해 설명해주세요 (최대 100자)"
      />
      <Satisfaction inputValue={satisfaction} inputSetValue={setSatisfaction} />
      <NewFeedBtn
        imageFile={titleImgFile}
        imageUrl={titleImgUrl}
        saveImageUrl={setTitleImgUrl}
        titleValue={title}
        tripPlaceValue={tripPlace}
        startAtValue={startAt}
        endAtValue={endAt}
        withPeopleValue={withPeople}
        tripIntrouceValue={tripIntroduce}
        satisfactionValue={satisfaction}
        title="완료"
      />
    </S.Layout>
  );
};