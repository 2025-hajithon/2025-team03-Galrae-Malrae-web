import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  box-sizing: border-box;
`;

const MobileView = styled.div`
  width: 393px;
  height: 100vh;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  margin: 0 auto;
  flex: 1;
`;

export const Layout = ({children}) => {
  return (
    <Wrapper>
      <MobileView>{children}</MobileView>
    </Wrapper>
  );
};
