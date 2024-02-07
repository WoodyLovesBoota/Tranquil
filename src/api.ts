import axios from "axios";

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_CALL_API_KEY;
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

export const fetchWeatherData = async (locationData: ILocationData | undefined) => {
  if (!locationData) {
    throw new Error("Failed to get location data");
  }

  const { latitude, longitude } = locationData;
  const lat = Number(latitude.toString().split(".")[0] + "." + latitude.toString().split(".")[1].slice(0, 2));
  const lng = Number(longitude.toString().split(".")[0] + "." + longitude.toString().split(".")[1].slice(0, 2));
  const weatherResponse = await axios
    .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}`)
    .then((res) => res.data);
  return weatherResponse;
};

export const fetchCityData = async (locationData: ILocationData | undefined) => {
  if (!locationData) {
    throw new Error("Failed to get location data");
  }

  const { latitude, longitude } = locationData;
  const lat = Number(latitude.toString().split(".")[0] + "." + latitude.toString().split(".")[1].slice(0, 2));
  const lng = Number(longitude.toString().split(".")[0] + "." + longitude.toString().split(".")[1].slice(0, 2));

  const cityResponse = await axios
    .get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}&language=kor`)
    .then((res) => res.data);
  return cityResponse.results;
};

export interface ILocationData {
  latitude: number;
  longitude: number;
}

export interface IWeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
