import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const Rain = () => {
  const [starting, setStarting] = useState(50);
  const [duration, setDuration] = useState(15);

  useEffect(() => {
    const randomDuration = Math.random();

    const randomStart = Math.random() * 100;

    setStarting(randomStart);
    setDuration(randomDuration);

    const interval = setInterval(() => {
      const randomStart = Math.random() * 100;

      setStarting(randomStart);
    }, randomDuration * 1000);
    return () => clearInterval(interval);
  }, []);

  return <SnowBall starting={starting} duration={duration}></SnowBall>;
};

export default Rain;

const falling = () => keyframes`
  to {
    transform: translateY(100vh) translateX(200px);
  }
`;

const SnowBall = styled.div<{ starting: number; duration: number }>`
  border: 1px solid white;
  width: 2px;
  height: 30px;
  border-radius: 100px;
  bottom: 100%;
  rotate: -20deg;
  animation: ${falling} ${(props) => props.duration}s linear infinite;
  position: absolute;
  left: ${(props) => props.starting}%;
`;
