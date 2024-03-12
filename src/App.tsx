import "./App.css";
import { Backgrounds } from "./Backgrounds/Backgrounds";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { Projects } from "./Projects/Projects";
import { UsefulLinks } from "./UsefulLinks/UsefulLinks";
import { About } from "./About/About";

function App() {

	return (
		<>
			<Backgrounds></Backgrounds>
			<div className="ligne">
				<div className="colonne align-items-center">
					<UsefulLinks></UsefulLinks>
					<Header></Header>
					<About></About>
					<Projects></Projects>
					<Footer></Footer>
				</div>
			</div>
		</>
	);
}

export default App;
