import logoACD from "../../assets/images/Logo_ACD_Groupe.png";
import { FavoriteIcon } from "../Icons/FavoriteIcon";

export function Experience2021(){
    return (
        <>
            <div className="ligne">
                <h2>
                    <FavoriteIcon marginRight={true} marginLeft={false}></FavoriteIcon>
                    Associate degree in Informatic Systems (August 2021) - 2nd place
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

            <div className="ligne">
                <h2>
                    FullStack developer (September 2021) <i className="fa-solid fa-user-plus color-success margin-left-icon"></i>
                </h2>
            </div>
            <div className="ligne">
                <span>
                    Conducting technological research to create the different internal and external software. 
                    Web consultant working with several groups. Drafting specs with the <em>needs of the customer</em> in mind. 
                    Analyzing an API in order to incorporate it into programs that already exist.
                </span>
            </div>
            <div className="ligne">
                <span>ACD Groupe, Tours, France</span>
            </div>
            <div className="ligne">
                <a href="https://www.acd-groupe.fr/" title="Website of the company">
                    <img className="image-experience" src={logoACD} />
                </a>
            </div>
        </>
    );
}