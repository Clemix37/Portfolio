import "./Projects.css";
import data from "../assets/data/projects.json";
import { Project } from "./Project/Project";

export function Projects(){
    let index = 0;
    const projects = data.projects.map(proj => {
        proj.id = index++;
        return proj;
    }).reverse();

    return (
        <div id="projects" className="ligne">
            <div className="colonne">
                <div className="ligne">
                    <h1>Projects</h1>
                </div>
                <hr className="separator" />
                <div className="ligne">
                    <div className="colonne">
                        {
                            projects.map(proj => (
                                <Project proj={proj} contenuGauche={proj.id % 2 === 0}></Project>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}