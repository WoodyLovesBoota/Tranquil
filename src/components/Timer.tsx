import { useRecoilState } from "recoil";
import styled from "styled-components";
import { timerRunningState, timerState } from "../atoms";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Timer = () => {
  const [isRunning, setIsRunning] = useRecoilState(timerRunningState);
  const [elapsedTime, setElapsedTime] = useRecoilState(timerState);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  return (
    <Wrapper>
      <Container variants={timerVar} initial="initial" animate="animate">
        <TimerBox>
          <TimerMin>
            {Math.floor(elapsedTime / 60) < 10
              ? "0" + Math.floor(elapsedTime / 60)
              : Math.floor(elapsedTime / 60)}
          </TimerMin>
          <TimerSec>{elapsedTime % 60 < 10 ? "0" + (elapsedTime % 60) : elapsedTime % 60}</TimerSec>
        </TimerBox>
        <Buttons>
          <Button onClick={handleStart} disabled={isRunning}>
            start
          </Button>
          <Button onClick={handleStop} disabled={!isRunning}>
            stop
          </Button>
          <Button onClick={handleReset}>reset</Button>
        </Buttons>
      </Container>
    </Wrapper>
  );
};

export default Timer;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  padding: 100px 150px;
`;

const TimerBox = styled.div`
  margin-bottom: 50px;
`;

const TimerMin = styled.h2`
  font-size: 48px;
  font-weight: 100;
  letter-spacing: 5px;
  text-align: right;
`;

const TimerSec = styled.h2`
  font-size: 48px;
  font-weight: 100;
  letter-spacing: 5px;
  text-align: right;
`;

const Button = styled.button`
  color: white;
  background-color: transparent;
  margin: 0 10px;
  cursor: pointer;
`;

const Buttons = styled.div`
  display: flex;
`;

const timerVar = {
  initial: { scale: 0 },
  animate: { scale: 1, transition: { duration: 0.3 } },
};
