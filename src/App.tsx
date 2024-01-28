import styled from "styled-components";
import Weather from "./components/Weather";
import { useRecoilState, useRecoilValue } from "recoil";
import { isAmState, navState, tempState, timerRunningState, timerState, weatherState } from "./atoms";
import Header from "./components/Header";
import SnowBg from "./components/backgrounds/SnovBg";
import NavigationBar from "./components/NavigationBar";
import Timer from "./components/Timer";
import { useEffect } from "react";
import RainBg from "./components/backgrounds/RainBg";
import Todo from "./components/Todo";
import SunshineBg from "./components/backgrounds/SunshineBg";
import SunshineBgTwo from "./components/backgrounds/SunBgTwo";

function App() {
  const weather = useRecoilValue(weatherState);
  const [isNow, setIsNow] = useRecoilState(navState);
  const [elapsedTime, setElapsedTime] = useRecoilState(timerState);
  const [isRunning, setIsRunning] = useRecoilState(timerRunningState);
  const temp = useRecoilValue(tempState);
  const isAm = useRecoilValue(isAmState);

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
    <Wrapper temp={temp} am={isAm.toString()}>
      {Math.floor(weather[0] / 100) === 5 || Math.floor(weather[0] / 100) === 2 ? (
        <RainBg />
      ) : Math.floor(weather[0] / 100) === 6 ? (
        <SnowBg />
      ) : weather[0] === 800 ? (
        <SunshineBgTwo />
      ) : null}
      <Container>
        <Header />
        <Weather />
        <NavigationBar />
        {isNow === 2 ? <Timer /> : isNow === 1 ? <Todo /> : null}
      </Container>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div<{ temp: number; am: string }>`
  width: 100vw;
  height: 100vh;
  transition: background-color 1s ease;
  background-color: ${(props) =>
    props.temp >= 30
      ? props.am === "true"
        ? props.theme.hottest.day
        : props.theme.hottest.night
      : props.temp >= 20
      ? props.am === "true"
        ? props.theme.hotter.day
        : props.theme.hotter.night
      : props.temp >= 10
      ? props.am === "true"
        ? props.theme.hot.day
        : props.theme.hot.night
      : props.temp >= 0
      ? props.am === "true"
        ? props.theme.normal.day
        : props.theme.normal.night
      : props.am === "true"
      ? props.theme.cold.day
      : props.theme.cold.night};
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
`;
