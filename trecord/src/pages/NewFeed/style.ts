import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  padding-top: 70px;
  gap: 15px;

  height: calc(100% - 90px);
  overflow: scroll;

  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const DateBox = styled.div`
  display: flex;
  gap: 25px;
`;