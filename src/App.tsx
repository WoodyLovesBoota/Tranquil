import styled from "styled-components";
import Weather from "./components/Weather";
import { useRecoilState, useRecoilValue } from "recoil";
import { navState, timerRunningState, timerState, weatherState } from "./atoms";
import Header from "./components/Header";
import SnowBg from "./components/backgrounds/SnovBg";
import NavigationBar from "./components/NavigationBar";
import Timer from "./components/Timer";
import { useEffect } from "react";

function App() {
  const weather = useRecoilValue(weatherState);
  const [isNow, setIsNow] = useRecoilState(navState);
  const [elapsedTime, setElapsedTime] = useRecoilState(timerState);
  const [isRunning, setIsRunning] = useRecoilState(timerRunningState);

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
    <Wrapper weather={weather[0]}>
      <SnowBg />
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

const Wrapper = styled.div<{ weather: number }>`
  width: 100vw;
  height: 100vh;
  transition: background-color 1s ease;
  ${(props) =>
    props.weather === 100 && {
      backgroundColor: "#000000",
    }};
  background-color: #ff9000;
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
`;
