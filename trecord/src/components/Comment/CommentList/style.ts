import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  padding-top: 90px;
  padding-bottom: 100px;
`;
export const LineBox = styled.hr`
  width: 390px;
  height: 1px;
  border: none;
  background: ${({ theme }) => theme.colors.colorStyles.gray300};
`;
export const CommentBox = styled.div`
  display: flex;
  padding-left: 30px;
  gap: 25px;
`;
export const CommentDataBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  .user_id {
    ${({ theme }) => theme.font.fontSize.Body_M}
    ${({ theme }) => theme.font.fontType.S}
  }
  .user_data {
    ${({ theme }) => theme.font.fontSize.Body_S}
    ${({ theme }) => theme.font.fontType.R}
    display: inline-block;
    width: 280px;
    word-wrap: break-word;
  }
  .user_date {
    color: ${({ theme }) => theme.colors.colorStyles.gray600};
    ${({ theme }) => theme.font.fontSize.Caption_S}
    ${({ theme }) => theme.font.fontType.R};
  }
`;

export const CommentMainDataBox = styled.div`
  display: flex;
  align-items: center;
  width: 288px;
  justify-content: space-between;
`;