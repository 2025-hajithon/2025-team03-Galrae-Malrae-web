import {useState} from "react";
import {Layout} from "../ui/Layout";
import styled from "styled-components";
import {MyPageHeader} from "../components/MyPageHeader";
import toggleOn from "../assets/toggleOn.svg";
import toggleOff from "../assets/toggleOff.svg";

export const Setting = () => {
  const [clicked, setClicked] = useState(true);

  return (
    <Layout>
      <MyPageHeader headerText={"설정"} rightButton={false} />
      <Wrapper>
      <List>
        <Gps>
          <p>GPS 권한</p>
          <img
            src={clicked ? toggleOn : toggleOff}
            onClick={() => {
              setClicked(!clicked);
            }}
          />
        </Gps>
        <p style={{padding: "16px 0", margin: "0"}}>데이터 초기화</p>
        <Logout>로그아웃</Logout>
      </List>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
position: relative;
display: flex;
flex-direction: column;
min-height: calc(100vh - 53px); 
width: 100%;
justify-content: flex-start;
`;

const List = styled.ul`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  color: var(--Black, #1a1a1a);

  /* Body/L-Bold */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%; /* 25.6px */
  letter-spacing: -0.48px;
`;

const Gps = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const Logout = styled.div`
  padding: 16px 0;
  color: #f55;
`;
