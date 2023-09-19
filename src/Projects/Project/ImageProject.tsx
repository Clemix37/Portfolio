import { Proj } from "./Project";

export function ImageProject({proj: theProject}:{proj:Proj}){
    if(!theProject.image) return (<></>);
    return (
        <div className="colonne">
            <div className="ligne">
                <img className="image-project" src={theProject.image.src} />
            </div>
        </div>
    );
}