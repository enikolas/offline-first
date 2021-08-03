import Header from "../components/Header";
import Dashboard from "../containers/Dashboard";
import { StyledContent } from "./styles";

const Main = () => (
	<StyledContent>
		<Header />
		<Dashboard />
	</StyledContent>
);

export default Main;
