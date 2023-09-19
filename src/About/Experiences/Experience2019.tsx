// import nao from "../../assets/images/NAO.png";
import logoACD from "../../assets/images/Logo_ACD_Groupe.png";
import { FavoriteIcon } from "../Icons/FavoriteIcon";
import { IntermediateIcon } from "../Icons/IntermediateIcon";
import { MasteryIcon } from "../Icons/MasteryIcon";
import "./Experience.css";

export function Experience2019(){
    return (
        <>
            <div className="ligne">
                <h2><FavoriteIcon marginRight={true} marginLeft={false}></FavoriteIcon>High School Diploma in Science</h2>
            </div>
            <div className="ligne">
                <span>With <em>mention</em><MasteryIcon marginLeft={true} marginRight={false}></MasteryIcon></span>
            </div>
            <div className="ligne">
                <span>Lycée Grandmont, Tours, France</span>
            </div>
            <div className="ligne">
                <h2>
                    <IntermediateIcon marginRight={true} marginLeft={false}></IntermediateIcon>
                    Starting Associate degree in Informatic Systems
                </h2>
            </div>
            <div className="ligne">
                <span>
                    <em>Alternating</em> between Company and School
                </span>
            </div>
            <div className="ligne">
                <span>
                    Specializing in <em>software engineering</em>
                </span>
            </div>
            <div className="ligne">
                <span>School: Lycée Notre Dame La Riche, Tours, France</span>
            </div>
            <div className="ligne">
                <span><em>Company</em>: ACD Groupe, Tours, France</span>
            </div>
            <div className="ligne">
                <a href="https://www.acd-groupe.fr/" title="Website of the company">
                    <img className="image-experience" src={logoACD} />
                </a>
            </div>
        </>
    );
}