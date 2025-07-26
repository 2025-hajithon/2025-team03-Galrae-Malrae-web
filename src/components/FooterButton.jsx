import styled from "styled-components";
import Color from "../ui/Color";

const Wrapper = styled.button`
  flex-shrink: 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.5;
  width: 100%;
  height: 94px;
  background-color: ${Color.main};
  color: ${Color.white};
  border: none;
`;

export const FooterButton = ({name, onClick}) => {
  return <Wrapper onClick={onClick}>{name}</Wrapper>;
};
