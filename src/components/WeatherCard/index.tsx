import { FC } from "react";
import { StyledCard, StyledCondition, StyledDate, StyledFeelsLike, StyledHumidity, StyledIcon, StyledLocation, StyledRemoveButton, StyledTemperature } from "./styles";

export interface IWeatherCard {
	lastUpdated: string;
	temperature: number;
	feelsLike: number;
	humidity: number;
	condition: string;
	icon: string;
	location: string;
	onRemove?: (location: string) => void;
}

const WeatherCard: FC<IWeatherCard> = ({
	lastUpdated,
	temperature,
	feelsLike,
	humidity,
	condition,
	icon,
	location,
	onRemove,
}) => (
	<StyledCard>
		<StyledLocation>{location}</StyledLocation>
		<StyledDate>{lastUpdated}</StyledDate>
		<StyledIcon src={icon} alt={`The weather is ${condition}`} />
		<StyledTemperature>{temperature}ºC</StyledTemperature>
		<StyledCondition>{condition}</StyledCondition>
		<StyledFeelsLike>Feels like {feelsLike}ºC</StyledFeelsLike>
		<StyledHumidity>Humidity {humidity}%</StyledHumidity>
		<StyledRemoveButton type="button" onClick={() => onRemove && onRemove(location)}>Remove</StyledRemoveButton>
	</StyledCard>
);

export default WeatherCard;
