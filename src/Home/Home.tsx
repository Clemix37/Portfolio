import "./Home.css";
import avatarLogo from "../assets/avatar/myAvatar.svg";
import brand from "../assets/8590053054_d007980d-8772-49ab-843f-7f380f20d5ac.png";

export function Home() {

    return (
        <div id="home" className="ligne">
            <div className="colonne">
                <div className="ligne navbar-home width-80 align-self-center">
                    <div className="colonne colonne-brand">
                        <div className="ligne justify-content-center">
                            <img src={brand} className="brand" alt="CyberWebDev" />
                        </div>
                    </div>
                    <div className="colonne justify-content-center">
                        <div className="ligne justify-content-center">TEXT / NOTHING</div>
                    </div>
                    <div className="colonne justify-content-center">
                        <div className="ligne justify-content-center">??</div>
                    </div>
                </div>
                <div className="ligne main-content-home">
                    <div className="colonne">
                        <div className="ligne justify-content-center">
                            <h1>
                                <strong>Fullstack Developer</strong>
                                <br /><span>/</span><br />
                                <strong>Tech Lead</strong>
                                <br /><span>/</span><br />
                                <strong>Mentor</strong>
                            </h1>
                        </div>
                        <div className="ligne justify-content-center">
                            <div className="avatar-container">
                                <img src={avatarLogo} className="avatar" alt="My Avatar" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ligne">
                    <div className="colonne">
                        <div className="ligne">
                            <h3 className="detailed-title">
								I'm a software engineer specializing in building exceptional.
								As a content creator, i teach programming in a funny and most of all understandable way.
								It's been and it is still my passion since 2015 !
							</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
