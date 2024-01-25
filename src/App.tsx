import styled from "styled-components";
import Weather from "./components/Weather";
import { useRecoilState, useRecoilValue } from "recoil";
import { navState, tempState, timerRunningState, timerState, weatherState } from "./atoms";
import Header from "./components/Header";
import SnowBg from "./components/backgrounds/SnovBg";
import NavigationBar from "./components/NavigationBar";
import Timer from "./components/Timer";
import { useEffect } from "react";
import RainBg from "./components/backgrounds/RainBg";

function App() {
  const weather = useRecoilValue(weatherState);
  const [isNow, setIsNow] = useRecoilState(navState);
  const [elapsedTime, setElapsedTime] = useRecoilState(timerState);
  const [isRunning, setIsRunning] = useRecoilState(timerRunningState);
  const temp = useRecoilValue(tempState);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isRunning]);

  return (
    <Wrapper temp={temp}>
      {Math.floor(weather[0] / 100) === 5 || Math.floor(weather[0] / 100) === 2 ? (
        <RainBg />
      ) : Math.floor(weather[0] / 100) === 6 ? (
        <SnowBg />
      ) : null}
      <Container>
        <Header />
        <Weather />
        <NavigationBar />
        {isNow === 2 ? <Timer /> : null}
      </Container>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div<{ temp: number }>`
  width: 100vw;
  height: 100vh;
  transition: background-color 1s ease;
  ${(props) =>
    props.temp < 0 && {
      backgroundColor: "#000000",
    }};
  background-color: #af0d54;
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
`;
