import React, {useState, useRef} from "react";
import styled from "styled-components";

// --- 스타일 정의 (Styled Components) ---

// 전체 프로그레스 바를 감싸는 컨테이너
const TrackerWrapper = styled.div`
  display: flex;
  align-items: flex-start; /* 아이콘과 라인 정렬 */
  max-width: 100%;
  padding: 20px 20px 20px 0;

  border-radius: 12px;
  overflow-x: auto; /* 컨텐츠가 넘칠 경우 가로 스크롤 활성화 */
  white-space: nowrap; /* 아이템들이 한 줄에 표시되도록 강제 */

  /* 스크롤바 디자인 (선택 사항) */
  &::-webkit-scrollbar {
    display: none;
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #e0e0e0;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #f99b2d;
    border-radius: 4px;
  }
`;

// 각 단계를 감싸는 컨테이너 (아이콘 + 텍스트)
const StepContainer = styled.div`
  display: inline-flex; /* 가로 스크롤을 위해 inline-flex로 변경 */
  flex-direction: column;
  align-items: center;
  position: relative;
  min-width: 80px; /* 각 단계의 최소 너비 지정 */
  flex-shrink: 0; /* 아이템이 부모 크기에 맞춰 줄어들지 않도록 방지 */
  margin-left: 20px;

  &:first-child {
    margin-left: 0;
  }
`;

// 동그란 아이콘 부분
const Circle = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  transition: all 0.4s ease;
  z-index: 2;

  /* 상태에 따른 스타일 변화 */
  border: 4px solid
    ${({$isActive, $isCompleted}) =>
      $isActive || $isCompleted ? "#F99B2D" : "#e0e0e0"};

  background-color: ${({$isActive, $isCompleted, $imageUrl}) => {
    if ($isActive) return "white";
    if ($isCompleted && !$imageUrl) return "#F99B2D";
    return "white";
  }};

  background-image: ${({$imageUrl}) =>
    $imageUrl ? `url(${$imageUrl})` : "none"};
  background-size: cover;
  background-position: center;

  color: ${({$isCompleted}) => ($isCompleted ? "white" : "#bdbdbd")};
`;

// 아이콘 아래 텍스트 라벨
const Label = styled.div`
  margin-top: 12px;
  font-size: 14px;
  font-weight: 600;
  color: ${({$isActive, $isCompleted}) =>
    $isActive || $isCompleted ? "#333" : "#9e9e9e"};
  transition: color 0.4s ease;
`;

// 아이콘 사이를 잇는 선
const Line = styled.div`
  position: absolute;
  top: 30px; /* Circle 높이의 절반 */
  left: 50%;
  width: 100%;
  height: 4px;
  background-color: ${({$isCompleted}) =>
    $isCompleted ? "#F99B2D" : "#e0e0e0"};
  z-index: 1;
  transition: background-color 0.4s ease;
`;

// --- 아이콘 컴포넌트 (SVG) ---
const CheckIcon = ({color = "white"}) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

// 시작 아이콘 (이정표 모양)
const SignpostIcon = ({color = "#F99B2D"}) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L4.5 5.5L12 9l7.5-3.5L12 2zM12 11.5l-7.5 3.5v4L12 22.5l7.5-3.5v-4L12 11.5z"
      opacity="0.6"
    />
    <path d="M12 2v7l7.5 3.5L12 9V2z" fill={color} />
  </svg>
);

// --- 메인 컴포넌트 ---

const ProgressTracker = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const containerRef = useRef(null);
  const stepRefs = useRef([]);

  // "시작" 단계를 다시 추가
  const steps = [
    {
      label: "시작",
      icon: <SignpostIcon />,
      imageUrl: null,
    },
    {
      label: "EXIT 홍대",
      icon: "1",
      imageUrl: "https://placehold.co/60x60/EFEFEF/333?text=EXIT",
    },
    {
      label: "카카오프렌즈",
      icon: "2",
      imageUrl: "https://placehold.co/60x60/333/FFF?text=KAKAO",
    },
    {
      label: "목적지3",
      icon: "3",
      imageUrl: null,
    },
    {
      label: "목적지4",
      icon: "4",
      imageUrl: null,
    },
    {
      label: "목적지4",
      icon: "4",
      imageUrl: null,
    },
    {
      label: "마지막 목적지",
      icon: "6",
      imageUrl: null,
    },
  ];

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      const nextStepIndex = currentStep + 1;
      setCurrentStep(nextStepIndex);
      setTimeout(() => {
        stepRefs.current[nextStepIndex]?.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }, 0);
    }
  };

  return (
    <div style={{padding: "20px", fontFamily: "sans-serif"}}>
      <TrackerWrapper ref={containerRef}>
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;

          return (
            <StepContainer
              key={index}
              ref={(el) => (stepRefs.current[index] = el)}
            >
              {/* 마지막 단계를 제외하고 모든 단계에 라인을 추가 */}
              {index !== steps.length - 1 && (
                <Line $isCompleted={isCompleted} />
              )}
              <Circle
                $isActive={isActive}
                $isCompleted={isCompleted}
                $imageUrl={step.imageUrl}
              >
                {/* 이미지가 없을 때만 아이콘/텍스트 표시 */}
                {!step.imageUrl && (isCompleted ? <CheckIcon /> : step.icon)}
              </Circle>
              <Label $isActive={isActive} $isCompleted={isCompleted}>
                {step.label}
              </Label>
            </StepContainer>
          );
        })}
      </TrackerWrapper>
      <button
        onClick={handleNextStep}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        다음 단계로
      </button>
    </div>
  );
};

export default ProgressTracker;
