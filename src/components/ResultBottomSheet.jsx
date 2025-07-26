import styled from "styled-components";
import Color from "../ui/Color";

const Wrapper = styled.div`
  height: 556px;
  width: 100%;
  background-color: ${Color.white};
  padding: 32px 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-top: 1px solid gray;
  box-sizing: border-box;
  border-top-left-radius: 20px;
  flex-shrink: 0;
  border-top-right-radius: 20px;
`;

const Explain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Header = styled.div`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
`;

const AdressText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 14px;
  .top {
    font-weight: 400;
    line-height: 1.6;
  }
  .bottom {
    font-weight: 400;
    color: ${Color["gray-600"]};
  }
`;

const Adress = styled.div`
  display: flex;
  gap: 8px;
`;

const Detail = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
`;

const Button = styled.button`
  width: 100%;
  height: 60px;
  font-size: 20px;
  line-height: 1.5;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  background-color: ${({variant}) =>
    variant === "re" ? Color["gray-100"] : Color.main};
  color: ${({variant}) => (variant === "re" ? Color.black : Color.white)};
`;

export const ResultBottomSheet = () => {
  return (
    <Wrapper>
      <img src="/MockImage.png" alt="MI" height={138} width={353} />
      <Explain>
        <Header>삼청당 홍대 본점</Header>
        <Adress>
          <img src="/Location.svg" alt="location" height={20} width={20} />
          <AdressText>
            <div className="top">서울특별시 마포구 양화로 188 (동교동)</div>
            <div className="bottom">내위치에서 230m</div>
          </AdressText>
        </Adress>
        <Detail>
          간단 설명 스크립트 더미텍스트 더미 텍스트 간단 설명 스크립트
          더미텍스트 더미 텍스트 간단 설명 스크립트 더미텍스트 더미 텍스트 간단
          설명 스크립트 더미텍스트 더미 텍스트간단 설명 스크립트 더미텍스트 더미
          텍스트 간단 설명 스크립트 더미텍스트 더미 텍스트 간단 설명 스크립트
          더미텍스트 더미 텍스트 간단 설명 스크립트 더미텍스트 더미 텍스트간단
          설명 스크립트 더미텍스트 더미 텍스트 간단 설명 스크립트 더미텍스트
          더미 텍스트 간단 설명 스크립트 더미텍스트 더미 텍스트 간단 설명
          스크립트 더미텍스트 더미 텍스트
        </Detail>
      </Explain>
      <Buttons>
        <Button variant="re">다시 추천</Button>
        <Button variant="complete">방문 완료</Button>
      </Buttons>
    </Wrapper>
  );
};
