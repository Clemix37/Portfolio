import { ContentProject } from "./ContentProject";
import { ImageProject } from "./ImageProject";

export interface ProjectLanguage {
    language: string;
}
export interface Proj {
    id: number;
    lien: string;
    text: string;
    name: string;
    devs: ProjectLanguage[];
    image: {
        src: string,
    } | null;
    icon: {
        type: string,
        class: string,
    } | null;
}
export interface ProjectArgument {
    proj:Proj;
    contenuGauche:boolean|null;
}

export function Project({proj,contenuGauche}:ProjectArgument){
    return (
        <div className="ligne project">
            {
                contenuGauche ? (
                    <>
                        <ContentProject proj={proj}></ContentProject>
                        <ImageProject proj={proj}></ImageProject>
                    </>
                ) : (
                    <>
                        <ImageProject proj={proj}></ImageProject>
                        <ContentProject proj={proj}></ContentProject>
                    </>
                )
            }
        </div>
    );
}