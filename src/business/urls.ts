const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = "https://api.weatherapi.com/v1";

export const currentWeatherUrl = (query: string) => `${BASE_URL}/current.json?key=${apiKey}&q=${query}`;
