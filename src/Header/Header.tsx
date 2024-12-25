import "./Header.css";
import avatarLogo from "../assets/avatar/myAvatar.svg";
import brand from "../assets/brand.png";

export function Header() {
	return (
		<div
			id="home"
			className="ligne">
			<div className="colonne">
				<div className="ligne navbar-home width-80 align-self-center">
					<div className="colonne colonne-brand">
						<div className="ligne justify-content-center">
							<img
								src={brand}
								className="brand"
								alt="CyberWebDev"
							/>
						</div>
					</div>
					<div className="colonne justify-content-center">
						<div className="ligne justify-content-center">&nbsp;</div>
					</div>
					<div className="colonne justify-content-center">
						<div className="ligne justify-content-center header-nav-liens">
							<a
								className="colonne align-items-center btn btn-rounded"
								href="#about">
								About
							</a>
							<a
								className="colonne align-items-center btn btn-rounded"
								href="#projects">
								Projects
							</a>
						</div>
					</div>
				</div>
				<div className="ligne main-content-home">
					<div className="colonne">
						<div className="ligne justify-content-center">
							<h1>
								<strong>Fullstack Developer,</strong>
								<br />
								<strong>Tech Lead,</strong>
								<br />
								<strong>Mentor</strong>
							</h1>
						</div>
						<div className="ligne justify-content-center">
							<div className="avatar-container">
								<img
									src={avatarLogo}
									className="avatar"
									alt="My Avatar"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="ligne">
					<div className="colonne">
						<div className="ligne">
							<h3 className="detailed-title">
								I'm a software engineer specializing in building <em>clean</em>, <em>elegant</em> and{" "}
								<em>efficient</em> code.
								<br />
								As a content creator, i teach programming in a <em>funny</em> and most of all{" "}
								<em>understandable</em> way.
								<br />
								This has been my <em>passion</em>, and it still is since 2015 !
							</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
