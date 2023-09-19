import logoACD from "../../assets/images/Logo_ACD_Groupe.png";

export function Experience2023(){
    return (
        <>
            <div className="ligne">
                <h2>
                    Tech Lead <i className="fa-solid fa-users-rays color-success margin-left-icon"></i>
                </h2>
            </div>
            <div className="ligne">
                <span><em>Responsible</em> for redoing the application under <em>new technology</em></span>
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