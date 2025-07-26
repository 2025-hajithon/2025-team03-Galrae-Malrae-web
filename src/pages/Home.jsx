import {Layout} from "../ui/Layout";
import {Map} from "../components/Map";
import {FooterButton} from "../components/FooterButton";
import styled from "styled-components";
import {BottomSheet} from "../components/BottomSheet";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

export const Home = () => {
  return (
    <Layout>
      <Wrapper>
        <Map />
        <BottomSheet />

        <FooterButton name={"다음 목적지 추천"} />
      </Wrapper>
    </Layout>
  );
};
