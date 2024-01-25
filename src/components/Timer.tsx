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
          <TimeRow>
            min
            <TimerMin>
              {Math.floor(elapsedTime / 60) < 10 ? "0" + Math.floor(elapsedTime / 60) : Math.floor(elapsedTime / 60)}
            </TimerMin>
          </TimeRow>
          <TimeRow>
            <TimerSec>{elapsedTime % 60 < 10 ? "0" + (elapsedTime % 60) : elapsedTime % 60}</TimerSec>
            sec
          </TimeRow>
        </TimerBox>
        <Buttons>
          {!isRunning ? (
            <Button onClick={handleStart} disabled={isRunning}>
              START
            </Button>
          ) : (
            <Button onClick={handleStop} disabled={!isRunning}>
              PAUSE
            </Button>
          )}
          <Button onClick={handleReset}>RESET</Button>
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
  background: #9400006b;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  width: 400px;
  height: 400px;
`;

const TimerBox = styled.div`
  margin-top: auto;
`;

const TimerMin = styled.h2`
  font-size: 60px;
  font-weight: 300;
  letter-spacing: 5px;
  text-align: right;
`;

const TimeRow = styled.div`
  display: flex;
  align-items: flex-start;
  font-weight: 400;
  font-size: 12px;
`;

const TimerSec = styled.h2`
  font-size: 60px;
  font-weight: 300;
  letter-spacing: 5px;
  text-align: right;
`;

const Button = styled.button`
  color: white;
  background-color: transparent;
  /* margin: 0 10px; */
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  width: 50%;
`;

const Buttons = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  margin-top: auto;
  justify-content: space-between;
`;

const timerVar = {
  initial: { scale: 0 },
  animate: { scale: 1, transition: { duration: 0.3 } },
};
