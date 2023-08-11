import { styled } from 'styled-components';

export const Layout = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 509px;
  }
`;
export const ImgBox = styled.div``;

export const ExplainBox = styled.div`
  position: absolute;
  top: 490px;
  width: 330px;
  height: 705px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.colorStyles.gray100};
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 5px;

  .detail_name {
    ${({ theme }) => theme.font.fontSize.Title_M}
    ${({ theme }) => theme.font.fontType.S}
  }
  .detail_place {
    ${({ theme }) => theme.font.fontSize.Body_S}
    ${({ theme }) => theme.font.fontType.R}
    padding-bottom:10px;
  }
  .detail_description {
    ${({ theme }) => theme.font.fontSize.Body_S}
    ${({ theme }) => theme.font.fontType.R}
    padding-top:25px;
  }
`;