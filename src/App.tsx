import "./App.css";
import { Contact } from "./Contact/Contact";
import { Home } from "./Home/Home";
import { NavBar } from "./NavBar/NavBar";
import { Projects } from "./Projects/Projects";
import { UsefulLinks } from "./UsefulLinks/UsefulLinks";

function App() {

	return (
		<div className="ligne">
			<div className="colonne align-items-center">
				<UsefulLinks></UsefulLinks>
				<NavBar></NavBar>
				<Home></Home>
				<Contact></Contact>
				<Projects></Projects>
			</div>
		</div>
	);
}

export default App;
