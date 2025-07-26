import {Layout} from "../ui/Layout";
import {Map} from "../components/Map";
import {FooterButton} from "../components/FooterButton";
import styled, {keyframes} from "styled-components";
import {useState, useEffect} from "react";
import {BottomSheet} from "../components/BottomSheet";
import {CheckModal} from "../components/Modal/CheckModal";

const slideUp = keyframes`
  from {
    transform: translateY(40%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const AnimatedContainer = styled.div`
  position: absolute;
  bottom: 95px;
  width: 100%;
  z-index: 10;
  animation: ${({$animate}) => ($animate ? slideUp : "none")}
    ${({$duration}) => $duration || "0s"} ease-in-out forwards;
  visibility: ${({$animate}) => ($animate ? "visible" : "hidden")};
  pointer-events: ${({$animate}) => ($animate ? "auto" : "none")};
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  justify-content: flex-end;
`;

export const Test = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setAnimate(false);
      const timeoutId = setTimeout(() => setAnimate(true), 10);
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen]);

  return (
    <Layout>
      <Wrapper>
        <Map />
        <CheckModal />
        <AnimatedContainer $animate={animate} $duration="1s">
          {isOpen ? <BottomSheet /> : ""}
        </AnimatedContainer>

        <FooterButton
          name={"다음 목적지 추천"}
          onClick={() => setIsOpen(!isOpen)}
        />
      </Wrapper>
    </Layout>
  );
};
