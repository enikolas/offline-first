import styled from "styled-components";

export const StyledCard = styled.section`
	background-color: white;
	margin: 2rem auto;
	padding: 2rem;
	display: grid;
	min-width: 310px;
	max-width: 400px;
	grid-template-columns: max-content max-content 1fr;
	grid-template-rows: repeat(6, auto);
	grid-template-areas:
		"location location location"
		"lastUpdated lastUpdated lastUpdated"
		"icon temperature condition"
		"icon temperature feelsLike"
		"icon temperature humidity"
		"removeButton removeButton removeButton";
	grid-gap: 0.5rem;
	box-shadow: 1px 2px 3px #ccc;

	@media screen and (min-width: 400px) {
		border-radius: 1rem;
	}
`;

export const StyledLocation = styled.p`
	grid-area: location;
	margin: 0;
	font-size: 1.8rem;
	font-weight: 700;
`;

export const StyledDate = styled.p`
	grid-area: lastUpdated;
	margin: 0;
	font-size: 1.6rem;
`;

export const StyledIcon = styled.img`
	grid-area: icon;
	align-self: center;
	margin: 0;
`;

export const StyledTemperature = styled.p`
	grid-area: temperature;
	margin: 0;
	align-self: center;
	padding-right: 1rem;
	font-size: 4.6rem;
	font-weight: 700;
`;

export const StyledCondition = styled.p`
	grid-area: condition;
	margin: 0;
	font-size: 1.6rem;
`;

export const StyledFeelsLike = styled.p`
	grid-area: feelsLike;
	margin: 0;
	font-size: 1.3rem;
`;

export const StyledHumidity = styled.p`
	grid-area: humidity;
	margin: 0;
	font-size: 1.3rem;
`;

export const StyledRemoveButton = styled.button`
	grid-area: removeButton;
	margin-top: 1rem;
	cursor: pointer;
	width: 100%;
	font-size: 1.6rem;
	padding: 0.5rem 0;
	border-radius: 0.5rem;
	border: 1px solid rgba(200, 0, 0, 0.4);
	background-color: rgba(200, 0, 0, 0.3);
	&:hover {
		background-color: rgba(200, 0, 0, 0.4);
	}
`
