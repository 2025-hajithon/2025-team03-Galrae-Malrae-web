import {Layout} from "../ui/Layout";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const onClick = () => {
  window.location.href =
    "https://galraemalrae.duckdns.org/oauth2/authorization/google";
};

export const Login = () => {
  return (
    <Layout>
      <Wrapper>
        <button onClick={onClick}>구글 로그인</button>
      </Wrapper>
    </Layout>
  );
};
