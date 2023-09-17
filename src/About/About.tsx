import "./About.css";
import { FavoriteIcon } from "./Icons/FavoriteIcon";
import { IntermediateIcon } from "./Icons/IntermediateIcon";
import { KnowledgeIcon } from "./Icons/KnowledgeIcon";
import { MasteryIcon } from "./Icons/MasteryIcon";

export function About(){
    return (
        <div className="ligne" id="about">
            <div className="colonne">
                <div className="ligne">
                    <h1>About me</h1>
                </div>
                <hr className="separator" />
                <div className="ligne legend">
                    <div className="colonne">
                        <div className="ligne">
                            Favorite <FavoriteIcon></FavoriteIcon>
                        </div>
                        <div className="ligne">
                            Mastery <MasteryIcon></MasteryIcon>
                        </div>
                        <div className="ligne">
                            Intermediate <IntermediateIcon></IntermediateIcon>
                        </div>
                        <div className="ligne">
                            Knowledge <KnowledgeIcon></KnowledgeIcon>
                        </div>
                    </div>
                </div>
                <div className="ligne cards">
                    <div className="card">
                        <h2 className="card-title">Front end</h2>
                        <hr />
                        <div className="ligne card-content">
                            <div className="colonne">
                                <div className="ligne">
                                    <span className="tag">
                                        HTML5 <MasteryIcon></MasteryIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        CSS3  <MasteryIcon></MasteryIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        JS (ES6+) <MasteryIcon></MasteryIcon> <FavoriteIcon></FavoriteIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        JQuery <MasteryIcon></MasteryIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        KendoUI <MasteryIcon></MasteryIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        TypeScript <IntermediateIcon></IntermediateIcon> <FavoriteIcon></FavoriteIcon> 
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        React <IntermediateIcon></IntermediateIcon> <FavoriteIcon></FavoriteIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        Electron <IntermediateIcon></IntermediateIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        Sass <KnowledgeIcon></KnowledgeIcon>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h2 className="card-title">Back end</h2>
                            <hr />
                        </div>
                        <div className="ligne card-content">
                            <div className="colonne">
                                <div className="ligne">
                                    <span className="tag">
                                        NodeJS <MasteryIcon></MasteryIcon> <FavoriteIcon></FavoriteIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        ExpressJS <MasteryIcon></MasteryIcon> <FavoriteIcon></FavoriteIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        C# <MasteryIcon></MasteryIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        .NET <MasteryIcon></MasteryIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        Python <IntermediateIcon></IntermediateIcon>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h2 className="card-title">Other</h2>
                            <hr />
                        </div>
                        <div className="ligne card-content">
                            <div className="colonne">
                                <div className="ligne">
                                    <span className="tag">
                                        MongoDB <MasteryIcon></MasteryIcon> <FavoriteIcon></FavoriteIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        VSCode <MasteryIcon></MasteryIcon> <FavoriteIcon></FavoriteIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        Git <MasteryIcon></MasteryIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        Visual Studio <MasteryIcon></MasteryIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        SQL <MasteryIcon></MasteryIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        Jest <IntermediateIcon></IntermediateIcon> <FavoriteIcon></FavoriteIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        MySQL <IntermediateIcon></IntermediateIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        PWA <IntermediateIcon></IntermediateIcon>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}