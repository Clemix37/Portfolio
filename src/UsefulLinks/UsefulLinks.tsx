import { IconButton } from "@mui/material";
import "./UsefulLinks.css";
// import CodeRoundedIcon from "@mui/icons-material/CodeRounded";

export function UsefulLinks() {
    return (
        <div className="colonne" id="useful-links">
            <IconButton aria-label="Code" color="secondary" title="Youtube" href="https://www.youtube.com/channel/UCr6FJ-upHVcTPpC0ZJdpW0w" target="_blank">
                <i className="fa-brands fa-youtube"></i>
            </IconButton>
            <IconButton aria-label="Code" color="secondary" title="Github" href="https://github.com/Clemix37" target="_blank">
                <i className="fa-brands fa-github"></i>
            </IconButton>
            <IconButton aria-label="Code" color="secondary" title="Twitter" href="https://twitter.com/WebdevCyber" target="_blank">
                <i className="fa-brands fa-twitter"></i>
            </IconButton>
            <IconButton aria-label="Code" color="secondary" title="Linkedin" href="https://www.linkedin.com/in/clement-theret/" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
            </IconButton>
            {/* <IconButton aria-label="Code" color="secondary" title="Other">
                <CodeRoundedIcon />
            </IconButton>
            <IconButton aria-label="Code" color="secondary" title="Github">
                <i className="fa-brands fa-github"></i>
            </IconButton> */}
        </div>
    );
}
