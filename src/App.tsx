import styled from "styled-components";
import Weather from "./components/Weather";
import { useRecoilValue } from "recoil";
import { weatherState } from "./atoms";
import Header from "./components/Header";
import SnowBg from "./components/backgrounds/SnovBg";

function App() {
  const weather = useRecoilValue(weatherState);

  return (
    <Wrapper weather={weather[0]}>
      <SnowBg />
      <Container>
        <Header />
        <Weather />
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
  background-color: #2a2a2a;
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
`;
