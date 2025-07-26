import styled from "styled-components";
import face from "../assets/face.svg";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  position:relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

const Img = styled.img`
position:absolute;
right: 23px;
cursor:pointer`

export const Header = () => {
  const nav = useNavigate();
  return (
    <Wrapper>
      <img src="/GoOrNo.svg" alt="" width={78} height={36} />
      <Img src={face} alt="초상화" onClick={() => {nav("/mypage")}}/> 
    </Wrapper>
  );
};
