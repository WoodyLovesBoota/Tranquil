import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
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
      <Snow /> <Snow />
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

const falling = (translateX: number[]) => keyframes`
  0% {
    transform: translateX(${translateX[0]}px);
  }

  20% {
    transform: translateX(${translateX[1]}px);
    bottom: 90%;

  }

  40% {
    transform: translateX(${translateX[2]}px);
    bottom: 70%;

  }

  60% {
    transform: translateX(${translateX[3]}px);
    bottom: 50%;

  }

  80% {
    transform: translateX(${translateX[4]}px);
    bottom: 20%;

  }

  100% {
    transform: translateX(${translateX[5]}px);
    bottom: 0;
  }
`;

const SnowExample = styled.div<{ translateX: number[] }>`
  background-color: white;
  width: 10px;
  height: 10px;
  border-radius: 100px;
  bottom: 100%;
  animation: ${(props) => falling(props.translateX)} 15s linear infinite;
  position: absolute;
  left: 10vw;
`;
