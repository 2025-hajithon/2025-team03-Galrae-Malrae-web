import {Layout} from "../ui/Layout";
import {Map} from "../components/Map";
import {FooterButton} from "../components/FooterButton";
import styled, {keyframes} from "styled-components";
import {useState, useEffect} from "react";
import {RecommendBottomSheet} from "../components/RecommendBottomSheet";
import {Header} from "../components/Header";
import ProgressTracker from "../components/ProgressTracker";

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
  pointer-events: none;
  animation: ${({$animate}) => ($animate ? slideUp : "none")}
    ${({$duration}) => $duration || "0s"} ease-in-out forwards;
  visibility: ${({$animate}) => ($animate ? "visible" : "hidden")};
  pointer-events: auto;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 100vh;
  width: 100%;
  justify-content: flex-end;
`;

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFirstOpen, setIsFirstopen] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [isOpen]);

  return (
    <Layout>
      <Wrapper>
        <Header />
        <ProgressTracker />
        <Map />
        <AnimatedContainer $animate={animate} $duration="1s">
          {isOpen ? <RecommendBottomSheet /> : null}
        </AnimatedContainer>

        <FooterButton
          name={"다음 목적지 추천"}
          onClick={
            isFirstOpen
              ? () => {
                  setIsOpen(!isOpen);
                  setIsFirstopen(!isFirstOpen);
                }
              : () => {}
          }
        />
      </Wrapper>
    </Layout>
  );
};
