import styled from "styled-components";
import {useState} from "react";
import Color from "../ui/Color";

const ModalBackdrop = styled.div`
  position: fixed; /* 화면 전체에 고정 */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명 검은색 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* 다른 요소들 위에 오도록 설정 */
`;

// ... 이전 Wrapper, Title 등 styled-components는 동일 ...

const Wrapper = styled.div`
  height: 468px;
  width: 100%;
  background-color: ${Color.white};
  padding: 48px 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-top: 1px solid gray;
  box-sizing: border-box;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.5;
`;

const PositionType = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SmallTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.6;
`;
const GrayTitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  color: ${Color["gray-400"]};
`;

const Buttons = styled.div`
  display: flex;
  gap: 8px;
`;

const Button = styled.button`
  height: 38px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 16px 10px;
  border: 1px solid ${Color["gray-200"]};
  background-color: ${(props) => (props.active ? Color.main : "white")};
  color: ${(props) => (props.active ? "white" : "black")};
`;

const Distance = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  .title {
    display: flex;
    gap: 8px;
  }
`;

// 💅 새로 추가된 RangeInput styled-component
const RangeInput = styled.input.attrs({type: "range"})`
  appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${(props) =>
    `linear-gradient(to right, ${Color.main} 0%, ${Color.main} ${
      props.value / 50
    }%, #eee ${props.value / 50}%, #eee 100%)`};
  outline: none;
  margin-top: 16px;

  /* Chrome, Safari, Opera, Edge */
  &::-webkit-slider-thumb {
    appearance: none;

    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${Color.white}; /* 핸들 색상 지정 */
    cursor: pointer;
    border: 2px solid ${Color.main};
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  }

  /* Firefox */
  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${Color.main}; /* 핸들 색상 지정 */
    cursor: pointer;
    border: 2px solid ${Color.white};
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  }
`;

export const BottomSheet = () => {
  const [selectedType, setSelectedType] = useState("");
  const [distance, setDistance] = useState(0);
  return (
    <Wrapper>
      <Title>어디로 추천해드릴까요</Title>
      <PositionType>
        <SmallTitle>장소 유형</SmallTitle>
        <Buttons>
          {["관광지", "음식점", "쇼핑", "문화시설"].map((label) => (
            <Button
              key={label}
              active={selectedType === label}
              onClick={() => setSelectedType(label)}
            >
              {label}
            </Button>
          ))}
        </Buttons>
      </PositionType>
      <Distance>
        <div className="title">
          <SmallTitle>거리</SmallTitle>
          <GrayTitle>0m - 5,000m</GrayTitle>
        </div>
        {/* 👇 기존 input을 새로 만든 RangeInput으로 교체 */}
        <RangeInput
          min="0"
          step="100"
          max="5000"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
        <div
          style={{
            marginTop: "8px",
            alignSelf: "center",
            padding: "6px 16px",
            border: "2px solid #e0e0e0",
            borderRadius: "12px",
            color: "#444",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          {parseInt(distance).toLocaleString()}m
        </div>
      </Distance>
    </Wrapper>
  );
};
