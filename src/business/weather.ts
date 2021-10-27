import axios from "axios";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = "https://api.weatherapi.com/v1";

interface ICurrentWeatherApiResponde {
	data: {
		location: {
			name: string;
			region: string;
		},
		current: {
			last_updated: string;
			temp_c: number;
			feelslike_c: number;
			humidity: number;
			condition: {
				text: string;
				icon: string;
			}
		}
	}
};

export interface ICurrentWeather {
	lastUpdated: Date;
	temperature: number;
	feelsLike: number;
	humidity: number;
	condition: string;
	icon: string;
	location: string;
};

const currentWeatherUrl = (query: string) => `${BASE_URL}/current.json?key=${apiKey}&q=${query}`;

export const getCurrentWeather = (location: string, callback?: (weather: ICurrentWeather) => void): void => {
	axios.get(currentWeatherUrl(location))
		.then((response: ICurrentWeatherApiResponde) => {
			const currentWeather: ICurrentWeather = {
				lastUpdated: new Date(response.data.current.last_updated),
				temperature: response.data.current.temp_c,
				feelsLike: response.data.current.feelslike_c,
				humidity: response.data.current.humidity,
				condition: response.data.current.condition.text,
				icon: response.data.current.condition.icon,
				location: `${response.data.location.name}, ${response.data.location.region}`,
			};

			if (callback) {
				callback(currentWeather);
			} else {
				return currentWeather;
			}
		})
		.catch((err) => {
			console.error("Fail to fetch", err);
		});
};
