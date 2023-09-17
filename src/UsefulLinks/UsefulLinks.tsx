import { IconButton } from "@mui/material";
import "./UsefulLinks.css";
import Links from "../Links";

export function UsefulLinks() {
    return (
        <div className="colonne" id="useful-links">
            <IconButton aria-label="Youtube" color="secondary" title="Youtube" href={Links.youtube} target="_blank">
                <i className="fa-brands fa-youtube"></i>
            </IconButton>
            <IconButton aria-label="Github" color="secondary" title="Github" href={Links.github} target="_blank">
                <i className="fa-brands fa-github"></i>
            </IconButton>
            <IconButton aria-label="Twitter" color="secondary" title="Twitter" href={Links.twitter} target="_blank">
                <i className="fa-brands fa-twitter"></i>
            </IconButton>
            <IconButton aria-label="Linkedin" color="secondary" title="Linkedin" href={Links.linkedin} target="_blank">
                <i className="fa-brands fa-linkedin"></i>
            </IconButton>
        </div>
    );
}
