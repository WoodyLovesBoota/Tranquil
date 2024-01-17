import styled from "styled-components";
import { useQuery } from "react-query";
import { ILocationData, IWeatherData, fetchCityData, fetchWeatherData } from "../api";
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
    ["weatherData", locationData],
    () => fetchWeatherData(locationData),
    { enabled: !!locationData }
  );

  useEffect(() => {
    const getLoc = async () => {
      const loc = await getCurrentLocation();
      loc &&
        setLocationData({
          latitude: Number(
            loc.latitude.toString().split(".")[0] +
              "." +
              loc.latitude.toString().split(".")[1].slice(0, 2)
          ),
          longitude: Number(
            loc.longitude.toString().split(".")[0] +
              "." +
              loc.longitude.toString().split(".")[1].slice(0, 2)
          ),
        });
    };
    getLoc();
  }, []);

  useEffect(() => {
    data && setWeather(data?.weather.map((e) => e.id));
  }, [data]);

  return <Wrapper></Wrapper>;
};

export default Weather;

const Wrapper = styled.div``;
