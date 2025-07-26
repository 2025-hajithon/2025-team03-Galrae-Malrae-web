import styled from "styled-components";
import Color from "../ui/Color";

const Wrapper = styled.button`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.5;
  width: 100%;
  height: 60px;
  background-color: ${Color.main};
  color: ${Color.white};
  border: none;
`;

export const FooterButton = ({name}) => {
  return <Wrapper>{name}</Wrapper>;
};
