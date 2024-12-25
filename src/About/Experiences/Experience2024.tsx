import logoACD from "../../assets/images/Logo_ACD_Groupe.png";

export function Experience2024() {
	return (
		<>
			<div className="ligne">
				<h2>
					FullStack developer - Senior{" "}
					<i className="fa-solid fa-users-rays color-success margin-left-icon"></i>
				</h2>
			</div>
			<div className="ligne">
				<span>
					Oversaw junior developers to <em>increase development efficiency and code quality</em>, and led a
					team of fullstack developers to restructure the program. To best tailor the development to the
					demands and goals of the client and quality assurance, technical analyses are used to examine
					technological feasibility. Changes related to <em>customer requests</em> and QA are also studied for
					their relevance. Doing <em>internal training</em> on programming languages and business tools.
				</span>
			</div>
			<div className="ligne">
				<h2>
					Lead Developer <i className="fa-solid fa-users-rays color-success margin-left-icon"></i> - October
					2024
				</h2>
			</div>
			<div className="ligne">
				<span>ACD Groupe, Tours, France</span>
			</div>
			<div className="ligne">
				<a
					href="https://www.acd-groupe.fr/"
					title="Website of the company">
					<img
						className="image-experience"
						src={logoACD}
					/>
				</a>
			</div>
		</>
	);
}
