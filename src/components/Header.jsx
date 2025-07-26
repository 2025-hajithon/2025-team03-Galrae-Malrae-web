import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

export const Header = () => {
  return (
    <Wrapper>
      <img src="/GoOrNo.svg" alt="" width={78} height={36} />
    </Wrapper>
  );
};
