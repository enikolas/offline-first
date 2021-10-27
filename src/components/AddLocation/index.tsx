import { ChangeEventHandler, FC, FormEventHandler } from "react";
import { StyledButton, StyledFormn, StyledInput } from "./styles";

export interface IAddLocation {
	value: string;
	onAddLocation?: (query: string) => void;
	onChange?: (value: string) => void;
	onRefresh?: () => void;
};

const AddLocation: FC<IAddLocation> = ({
	value,
	onAddLocation,
	onChange,
	onRefresh,
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
				value={value}
			/>
			<StyledButton type="submit">
				➕
			</StyledButton>
			<StyledButton type="button" onClick={onRefresh}>
				🔁
			</StyledButton>
		</StyledFormn>
	);
};

export default AddLocation;
