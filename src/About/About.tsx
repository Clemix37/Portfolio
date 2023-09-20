import "./About.css";
import { Experience } from "./Experiences/Experience";
import { Experience2019 } from "./Experiences/Experience2019";
import { Experience2020 } from "./Experiences/Experience2020";
import { Experience2021 } from "./Experiences/Experience2021";
import { Experience2023 } from "./Experiences/Experience2023";
import { FavoriteIcon } from "./Icons/FavoriteIcon";
import { IntermediateIcon } from "./Icons/IntermediateIcon";
import { KnowledgeIcon } from "./Icons/KnowledgeIcon";
import { MasteryIcon } from "./Icons/MasteryIcon";
import { useState } from "react";

export function About(){
    const [yearDisplayed, setYearDisplayed] = useState(2019);
    const [componentDisplayed, setComponentDisplayed] = useState(<Experience2019></Experience2019>);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const years:{year:number, component:any}[] = [
        {year: 2019, component: <Experience2019></Experience2019>}, 
        {year: 2020, component: <Experience2020></Experience2020>}, 
        {year: 2021, component: <Experience2021></Experience2021>},
        {year: 2023, component: <Experience2023></Experience2023>},
    ];

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
                            Favorite <FavoriteIcon marginLeft={true} marginRight={false}></FavoriteIcon>
                        </div>
                        <div className="ligne">
                            Mastery <MasteryIcon marginLeft={true} marginRight={false}></MasteryIcon>
                        </div>
                        <div className="ligne">
                            Intermediate <IntermediateIcon marginLeft={true} marginRight={false}></IntermediateIcon>
                        </div>
                        <div className="ligne">
                            Knowledge <KnowledgeIcon marginLeft={true} marginRight={false}></KnowledgeIcon>
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
                                        HTML5 <MasteryIcon marginLeft={true} marginRight={false}></MasteryIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        CSS3  <MasteryIcon marginLeft={true} marginRight={false}></MasteryIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        JS (ES6+) 
                                        <MasteryIcon marginLeft={true} marginRight={false}></MasteryIcon>
                                        <FavoriteIcon marginLeft={true} marginRight={false}></FavoriteIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        JQuery <MasteryIcon marginLeft={true} marginRight={false}></MasteryIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        KendoUI <MasteryIcon marginLeft={true} marginRight={false}></MasteryIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        TypeScript 
                                        <IntermediateIcon marginLeft={true} marginRight={false}></IntermediateIcon>
                                        <FavoriteIcon marginLeft={true} marginRight={false}></FavoriteIcon> 
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        React 
                                        <IntermediateIcon marginLeft={true} marginRight={false}></IntermediateIcon>
                                        <FavoriteIcon marginLeft={true} marginRight={false}></FavoriteIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        ASP.NET <IntermediateIcon marginLeft={true} marginRight={false}></IntermediateIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        Electron <IntermediateIcon marginLeft={true} marginRight={false}></IntermediateIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        NextJS <KnowledgeIcon marginLeft={true} marginRight={false}></KnowledgeIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        Sass <KnowledgeIcon marginLeft={true} marginRight={false}></KnowledgeIcon>
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
                                        NodeJS 
                                        <MasteryIcon marginLeft={true} marginRight={false}></MasteryIcon> 
                                        <FavoriteIcon marginLeft={true} marginRight={false}></FavoriteIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        ExpressJS 
                                        <MasteryIcon marginLeft={true} marginRight={false}></MasteryIcon>
                                        <FavoriteIcon marginLeft={true} marginRight={false}></FavoriteIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        C# <MasteryIcon marginLeft={true} marginRight={false}></MasteryIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        .NET <IntermediateIcon marginLeft={true} marginRight={false}></IntermediateIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        Python <IntermediateIcon marginLeft={true} marginRight={false}></IntermediateIcon>
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
                                        MongoDB
                                        <MasteryIcon marginLeft={true} marginRight={false}></MasteryIcon>
                                        <FavoriteIcon marginLeft={true} marginRight={false}></FavoriteIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        VSCode
                                        <MasteryIcon marginLeft={true} marginRight={false}></MasteryIcon>
                                        <FavoriteIcon marginLeft={true} marginRight={false}></FavoriteIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        Git <MasteryIcon marginLeft={true} marginRight={false}></MasteryIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        Visual Studio <MasteryIcon marginLeft={true} marginRight={false}></MasteryIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        SQL <MasteryIcon marginLeft={true} marginRight={false}></MasteryIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        Jest
                                        <IntermediateIcon marginLeft={true} marginRight={false}></IntermediateIcon>
                                        <FavoriteIcon marginLeft={true} marginRight={false}></FavoriteIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        MySQL <IntermediateIcon marginLeft={true} marginRight={false}></IntermediateIcon>
                                    </span>
                                </div>
                                <div className="ligne">
                                    <span className="tag">
                                        PWA <IntermediateIcon marginLeft={true} marginRight={false}></IntermediateIcon>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ligne">
                    <div className="colonne colonne-timeline">
                        <div className="ligne timeline">
                            <div className="colonne">
                                {
                                    years.map(yearObj => (
                                        <Experience key={yearObj.year}
                                            year={yearObj.year} 
                                            component={yearObj.component}
                                            isActive={yearDisplayed === yearObj.year} 
                                            setYearDisplayed={setYearDisplayed}
                                            setComponentDisplayed={setComponentDisplayed}
                                        >
                                        </Experience>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="colonne is-2-colonne" id="experience-content">
                        {
                            componentDisplayed
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
