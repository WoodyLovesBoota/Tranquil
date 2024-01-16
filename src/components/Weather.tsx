import styled from "styled-components";
import { useQuery } from "react-query";
import { ILocationData, IWeatherData, fetchWeatherData } from "../api";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { weatherState } from "../atoms";

const Weather = () => {
  const [locationData, setLocationData] = useState<ILocationData | undefined>();
  const [weather, setWeather] = useRecoilState(weatherState);
  const getCurrentLocation = async (): Promise<ILocationData | null> => {
    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const { latitude, longitude } = position.coords;
      return { latitude, longitude };
    } catch (error) {
      console.error("Error getting location:", error);
      return null;
    }
  };

  const { data, isLoading } = useQuery<IWeatherData>(
    ["weatherData", locationData?.latitude],
    () => fetchWeatherData(locationData),
    { enabled: !!locationData }
  );

  useEffect(() => {
    const getLoc = async () => {
      const loc = await getCurrentLocation();
      loc && setLocationData(loc);
    };
    getLoc();
  }, []);

  useEffect(() => {
    setWeather(data?.weather[0].main || "default");
  }, [data]);

  return <Wrapper>{isLoading ? "로딩중" : data?.weather[0].main}</Wrapper>;
};

export default Weather;

const Wrapper = styled.div``;
