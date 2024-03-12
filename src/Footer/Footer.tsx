import { Button } from "@mui/material";
import Links from "../Links";
import "./Footer.css";

export function Footer(){
    const annee:number = new Date().getFullYear();
    
    const redirigerVersUrl = (url: string, newTab: boolean = true) => {
        window.open(url, newTab ? "_blank" : "_self");
    };

    const handleClickBuyMe = () : void => {
        redirigerVersUrl(Links.buyMe);
    };

    const handleClickYoutube = () : void => {
        redirigerVersUrl(Links.youtube);
    };

    const handleClickTwitter = () : void => {
        redirigerVersUrl(Links.twitter);
    };

    const handleClickLinkedin = () : void => {
        redirigerVersUrl(Links.linkedin);
    };

    const handleClickGithub = () : void => {
        redirigerVersUrl(Links.github);
    };

    return (
        <div className="ligne" id="footer">
            <div className="colonne">
                <div className="ligne buttons-footer">
                    <Button onClick={handleClickBuyMe} variant="outlined" color="secondary">
                        <i className="fa-solid fa-pizza-slice margin-right-icon color-warning"></i>
                        Buy me a Pizza
                    </Button>
                    <Button onClick={handleClickYoutube} variant="outlined" color="secondary">
                        <i className="fa-brands fa-youtube margin-right-icon color-error"></i>
                        Youtube
                    </Button>
                    <Button onClick={handleClickTwitter} variant="outlined" color="secondary">
                        <i className="fa-brands fa-twitter margin-right-icon color-secondary"></i>
                        Twitter
                    </Button>
                    <Button onClick={handleClickLinkedin} variant="outlined" color="secondary">
                        <i className="fa-brands fa-linkedin margin-right-icon color-secondary-variation"></i>
                        Linkedin
                    </Button>
                    <Button onClick={handleClickGithub} variant="outlined" color="secondary">
                        <i className="fa-brands fa-github margin-right-icon color-secondary-variation"></i>
                        Github
                    </Button>
                </div>
                <div className="ligne creator">
                    <span>CyberWebDev</span>&nbsp; &copy; - {annee}
                </div>
            </div>
        </div>
    );
}