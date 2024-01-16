import styled from "styled-components";
import Weather from "./components/Weather";
import { useRecoilValue } from "recoil";
import { weatherState } from "./atoms";

function App() {
  const weather = useRecoilValue(weatherState);

  return (
    <Wrapper weather={weather.toLowerCase()}>
      <Weather />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div<{ weather: string }>`
  width: 100vw;
  height: 100vh;
  transition: background-color 1s ease;
  ${(props) =>
    props.weather === "default" && {
      backgroundColor: "#000000",
    }};
  ${(props) =>
    props.weather.includes("clear") && {
      backgroundColor: props.theme.clear,
    }};
`;
