import { useEffect, useState } from "react";
import AddLocation from "../components/AddLocation";
import { StyledSection } from "./styles";
import { getCurrentWeather, ICurrentWeather } from "../business/weather";
import WeatherList from "../components/WeatherList";

const Dashboard = () => {
	const [weathers, setWeathers] = useState<ICurrentWeather[]>([]);
	const [locations, setLocations] = useState<string[]>(['Campinas, Sao Paulo']);
	const [query, setQuery] = useState<string>('');

	const addWeather = (location: string) => (currentWeather: ICurrentWeather): void => {
		const filteredWeathers = weathers.filter((item) => !item.location.includes(location));
		setWeathers([...filteredWeathers, currentWeather]);
	};

	useEffect(() => {
		locations.forEach((location) => getCurrentWeather(location, addWeather(location)));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [locations]);

	const onAddLocation = (value: string): void => {
		if (!locations.includes(value)) {
			setLocations([...locations, value]);
		}
		setQuery('');
	}

	const onRemoveLocation = (location: string): void => {
		setLocations(locations.filter(item => !location.includes(item)));
		setWeathers(weathers.filter(item => item.location !== location));
	}

	return (
		<StyledSection>
			<AddLocation
				value={query}
				onChange={setQuery}
				onAddLocation={onAddLocation}
			/>
			<WeatherList
				weathers={weathers.sort()}
				onRemoveLocation={onRemoveLocation}
			/>
		</StyledSection>
	);
};

export default Dashboard;
