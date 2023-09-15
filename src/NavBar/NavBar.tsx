import "./NavBar.css";

export function NavBar() {
    return (
        <div className="ligne navbar">
            <a className="colonne bordure secondaire" href="#">Home</a>
            <a className="colonne bordure tertiaire" href="#contact">Contact</a>
            <a className="colonne bordure erreur" href="#projects">Projects</a>
        </div>
    );
}
