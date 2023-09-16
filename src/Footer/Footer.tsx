import "./Footer.css";

export function Footer(){
    const annee:number = new Date().getFullYear();

    return (
        <div className="ligne" id="footer">
            <div className="colonne">
                <div className="ligne">
                    <span>CyberWebDev</span>&nbsp; &copy; - {annee}
                </div>
            </div>
        </div>
    );
}