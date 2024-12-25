import logoACD from "../../assets/images/Logo_ACD_Groupe.png";
import { IntermediateIcon } from "../Icons/IntermediateIcon";

export function Experience2020(){
    return (
        <>
            <div className="ligne">
                <h2>
                    <IntermediateIcon marginRight={true} marginLeft={false}></IntermediateIcon>
                    Continuing Associate degree in Informatic Systems
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
                <span>
                    Carrying out research on technology unique to the organization. 
                    Creation of enhancements and fixes to stabilize the version before distributing it to clients. 
                    Completing technical analyses in accordance with the supplied specifications.
                </span>
            </div>
            <div className="ligne">
                <a href="https://www.acd-groupe.fr/" title="Website of the company">
                    <img className="image-experience" src={logoACD} />
                </a>
            </div>
        </>
    );
}