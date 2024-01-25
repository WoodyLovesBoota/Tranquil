import styled from "styled-components";
import Snow from "../Snow";

const SnowBg = () => {
  return (
    <Wrapper>
      <Snow />
      <Snow />
      <Snow />
      <Snow />
      <Snow /> <Snow />
      <Snow />
      <Snow />
      <Snow />
      <Snow />
    </Wrapper>
  );
};

export default SnowBg;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;
