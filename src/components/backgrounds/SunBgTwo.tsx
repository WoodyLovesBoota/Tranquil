import styled, { keyframes } from "styled-components";

const SunshineBgTwo = () => {
  return (
    <Wrapper>
      {/* <Sun /> */}
      <SunTwo />
      <Sun />
    </Wrapper>
  );
};

export default SunshineBgTwo;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  /* padding: 200px 400px; */
`;

const blink = keyframes`
  0% {
    opacity:0;
  }
  70% {
    opacity:1;
  }
  100% {
    opacity:0;
  }
`;

const Sun = styled.div`
  width: 100px;
  height: 100vh;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
  rotate: 30deg;
  animation: ${blink} 3s infinite;
`;

const SunTwo = styled.div`
  width: 500px;
  height: 100vh;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
  rotate: 60deg;
  animation: ${blink} 3s infinite;
`;

const BigSun = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 200px;
  margin-left: 60px;
  margin-top: -60px;
  box-shadow: inset 0 0 20px 0px white, 0px 0px 40px 0px white;
  animation: ${blink} 10s infinite;
`;

const SunThree = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 100px;
  margin-left: 220px;
  margin-top: -40px;
  box-shadow: inset 0 0 20px 0px white, 0px 0px 80px 10px white;
  animation: ${blink} 10s infinite;
`;
