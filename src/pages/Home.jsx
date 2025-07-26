import axios from "axios";
import {Layout} from "../ui/Layout";
import {Map} from "../components/Map";
import {FooterButton} from "../components/FooterButton";
import styled, {keyframes} from "styled-components";
import {useState, useEffect} from "react";
import {RecommendBottomSheet} from "../components/RecommendBottomSheet";
import {Header} from "../components/Header";
import ProgressTracker from "../components/ProgressTracker";
import {useAtom} from "jotai";
import {
  PlaceAtom,
  DistanceAtom,
  LatitudeAtom,
  LongitudeAtom,
} from "../store/Atom";
import {Convert} from "../constants/Convert";
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
  const [place, setPlace] = useAtom(PlaceAtom);
  const [distance, setDistance] = useAtom(DistanceAtom);
  const [latitude] = useAtom(LatitudeAtom);
  const [longitude] = useAtom(LongitudeAtom);
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
              : () => {
                  if (place != "" && distance != 0) {
                    console.log(latitude);
                    console.log(longitude);
                    console.log(Convert[place]);
                    console.log(distance);
                    axios
                      .get(
                        "https://galraemalrae.duckdns.org/place/recommendation",
                        {
                          mapX: String(latitude),
                          mapY: String(longitude),
                          placeType: String(Convert[place]),
                          radius: String(distance),
                        }
                      )
                      .then((res) => {
                        console.log("백엔드 응답:", res.data);
                      })
                      .catch((err) => {
                        console.error("백엔드 요청 실패:", err);
                      });
                  } else {
                    alert("장소와 거리를 선택해주세요");
                  }
                }
          }
        />
      </Wrapper>
    </Layout>
  );
};
