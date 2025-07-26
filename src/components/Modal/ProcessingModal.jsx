import React from "react";
import styled, {keyframes} from "styled-components";

// --- 스타일 정의 (Styled Components) ---

// 모달이 나타날 때 부드럽게 보이도록 하는 fade-in 애니메이션
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
// 캐릭터가 살짝 흔들리는 애니메이션
const wiggle = keyframes`
  0%, 100% {
    transform: rotate(-3deg);
  }
  50% {
    transform: rotate(3deg);
  }
`;

// 화면 전체를 덮는 반투명 배경
const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-out;
`;

// 모달의 실제 콘텐츠를 감싸는 컨테이너
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px; // 아이콘과 텍스트 사이의 간격
`;

// 캐릭터 이미지를 감싸고 애니메이션을 적용하는 컨테이너
const CharacterWrapper = styled.div`
  position: relative;
  animation: ${wiggle} 2s ease-in-out infinite;
`;

// 캐릭터 이미지 스타일
const CharacterImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain; // 이미지 비율을 유지하면서 컨테이너에 맞춤
`;

// --- 메인 모달 컴포넌트 ---

export const ProcessingModal = ({isOpen = true}) => {
  // isOpen prop이 false이면 모달을 렌더링하지 않음
  if (!isOpen) {
    return null;
  }

  return (
    <ModalBackdrop>
      <ModalContent>
        <CharacterWrapper>
          <CharacterImage src="/Pending.svg" alt="pending" />
        </CharacterWrapper>
      </ModalContent>
    </ModalBackdrop>
  );
};
