import "./App.css";
import { Contact } from "./Contact/Contact";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { NavBar } from "./NavBar/NavBar";
import { Projects } from "./Projects/Projects";
import { UsefulLinks } from "./UsefulLinks/UsefulLinks";

function App() {

	return (
		<div className="ligne">
			<div className="colonne align-items-center">
				<UsefulLinks></UsefulLinks>
				<NavBar></NavBar>
				<Header></Header>
				<Contact></Contact>
				<Projects></Projects>
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App;
