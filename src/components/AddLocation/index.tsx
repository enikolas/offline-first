import { ChangeEventHandler, FC, FormEventHandler } from "react";
import { StyledButton, StyledFormn, StyledInput } from "./styles";

export interface IAddLocation {
	value: string;
	onAddLocation?: (query: string) => void;
	onChange?: (value: string) => void;
};

const AddLocation: FC<IAddLocation> = ({
	value,
	onAddLocation,
	onChange,
}) => {
	const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => onChange && onChange(event.target.value);

	const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();

		onAddLocation && onAddLocation(value);
	};

	return (
		<StyledFormn onSubmit={onSubmit}>
			<StyledInput
				type="AddLocation"
				onChange={handleChange}
				placeholder="Add a new location"
			/>
			<StyledButton type="submit">
				➕
			</StyledButton>
		</StyledFormn>
	);
};

export default AddLocation;
