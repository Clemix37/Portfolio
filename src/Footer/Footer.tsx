import "./Footer.css";

export function Footer(){
    const annee:number = new Date().getFullYear();

    return (
        <div className="ligne" id="footer">
            <div className="colonne">
                <div className="ligne">
                    CyberWebDev &copy; - {annee}
                </div>
            </div>
        </div>
    );
}