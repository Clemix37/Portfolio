import "./NavBar.css";
import { useState } from "react";

export function NavBar() {
    const [hasScrolled, setHasScrolled] = useState(false);

    const defineScrollVariable = (toSetScrolled = true):void => {
        setHasScrolled(toSetScrolled);
    };
    
    document.addEventListener("scroll", () => defineScrollVariable(true));

    return (
        <div className="ligne navbar">
            {
                hasScrolled ? (
                    <a className="colonne align-items-center btn btn-rounded" href="#" onClick={() => defineScrollVariable(false)}>Home</a>
                ) : (<></>)
            }
            <a className="colonne align-items-center btn btn-rounded" href="#about">About</a>
            <a className="colonne align-items-center btn btn-rounded" href="#projects">Projects</a>
            <a className="colonne align-items-center btn btn-rounded" href="#contact">Contact</a>
        </div>
    );
}
