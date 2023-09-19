import { Proj, ProjectLanguage } from "./Project";

export function ContentProject({proj: theProject}:{proj:Proj}){
    return (
        <div className="colonne">
            <div className="ligne">
                <h2>{theProject.name}</h2>
            </div>
            <div className="ligne">
                <span className="text-project">{theProject.text}</span>
            </div>
            {
                theProject.lien.length > 0 ? (
                    <div className="ligne">
                        <a className="link-project" title="Link" href={theProject.lien}><i className="fa-solid fa-link margin-right-icon"></i>Link</a>
                    </div>
                ) : (<></>)
            }
            {
                theProject.devs.length > 0 ? (
                    <>
                        <div className="ligne">
                            <span>
                                Made with :
                            </span>
                        </div>
                        {
                            theProject.devs.map((lang:ProjectLanguage) => (
                                <div className="ligne">
                                    <span className="tag">
                                        {/* <i className="fa-brands fa-python margin-right-icon color-yellow"></i> */}
                                        <em>{lang.language}</em>
                                    </span>
                                </div>
                            ))
                        }
                    </>
                ) : (<></>)
            }
        </div>
    );
}