import { Icon } from '@components/common/Icon';
import * as S from './style';
import icons from '@/assets/index';
export interface mypageMenuProps {
  title: string;
  menuList: menuPorps[];
}
interface menuPorps {
  id: number;
  btnIcon?: keyof typeof icons;
  btnTitle: string;
  onClick?: () => void;
}

export const MyPageMenu = ({ ...props }: mypageMenuProps) => {
  return (
    <S.Layout>
      <S.TitleBox>{props.title}</S.TitleBox>
      {props.menuList.map((e) => (
        <S.MenuBox key={e.id}>
          <S.MenuTitleBox>
            {e.btnIcon && <Icon iconType={e.btnIcon} width={24} />}
            <S.BtnTitleBox>{e.btnTitle}</S.BtnTitleBox>
          </S.MenuTitleBox>
          <Icon iconType="arrowRight" width={24} onClick={e.onClick} />
        </S.MenuBox>
      ))}
      {/* <S.MenuBox>
        <S.MenuTitleBox>
          <Icon iconType={props.menuList.btnIcon} width={24} />
          <S.BtnTitleBox>{props.btnTitle}</S.BtnTitleBox>
        </S.MenuTitleBox>
        <Icon iconType="arrowRight" width={24} onClick={props.onClick} />
      </S.MenuBox> */}
    </S.Layout>
  );
};
