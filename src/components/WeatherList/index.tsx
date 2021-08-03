import { FC } from "react";
import { ICurrentWeather } from "../../business/weather";
import WeatherCard from "../WeatherCard";

export interface IWeatherList {
	weathers: ICurrentWeather[];
	onRemoveLocation?: (location: string) => void;
};

const WeatherList: FC<IWeatherList> = ({
	weathers,
	onRemoveLocation,
}) => (
	<>
		{weathers.map((weather: ICurrentWeather) => (
			<WeatherCard
				key={`${weather.location}-${weather.lastUpdated.toISOString()}`}
				condition={weather.condition}
				feelsLike={weather.feelsLike}
				humidity={weather.humidity}
				icon={weather.icon}
				lastUpdated={weather.lastUpdated}
				location={weather.location}
				temperature={weather.temperature}
				onRemove={onRemoveLocation}
			/>
		))}
	</>
);

export default WeatherList;
