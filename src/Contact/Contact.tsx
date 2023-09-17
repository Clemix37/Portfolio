import Links from "../Links";
import "./Contact.css";
import {Button} from "@mui/material";

export function Contact(){
    
    const redirigerVersUrl = (url:string, newTab:boolean = true) => {
        window.open(url, newTab ? "_blank" : "_self");
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClickContact = (e:any):void => {
        window.location.href = "mailto:clementix01@gmail.com";
        e.preventDefault();
    };

    const handleClickBuyMe = ():void => {
        redirigerVersUrl(Links.buyMe);
    };

    const handleClickYoutube = ():void => {
        redirigerVersUrl(Links.youtube);
    };

    const handleClickTwitter = ():void => {
        redirigerVersUrl(Links.twitter);
    };

    const handleClickLinkedin = ():void => {
        redirigerVersUrl(Links.linkedin);
    };

    return (
        <div id="contact" className="ligne">
            <div className="colonne">
                <div className="ligne">
                    <h1>Contact</h1>
                </div>
                <hr className="separator" />
                <div className="ligne">
                    <Button onClick={handleClickContact} variant="outlined" color="secondary">
                        <i className="fa-solid fa-circle-nodes margin-right-icon color-secondary-variation"></i>
                        Let's connect
                    </Button>
                </div>
                <div className="ligne ligne-btn">
                    <Button onClick={handleClickBuyMe} variant="outlined" color="secondary">
                        <i className="fa-solid fa-pizza-slice margin-right-icon color-warning"></i>
                        Buy me a Pizza
                    </Button>
                </div>
                <div className="ligne ligne-btn">
                    <Button onClick={handleClickYoutube} variant="outlined" color="secondary">
                        <i className="fa-brands fa-youtube margin-right-icon color-error"></i>
                        Youtube
                    </Button>
                </div>
                <div className="ligne ligne-btn">
                    <Button onClick={handleClickTwitter} variant="outlined" color="secondary">
                        <i className="fa-brands fa-twitter margin-right-icon color-secondary"></i>
                        Twitter
                    </Button>
                </div>
                <div className="ligne ligne-btn">
                    <Button onClick={handleClickLinkedin} variant="outlined" color="secondary">
                        <i className="fa-brands fa-linkedin margin-right-icon color-secondary-variation"></i>
                        Linkedin
                    </Button>
                </div>
            </div>
        </div>
    );
}