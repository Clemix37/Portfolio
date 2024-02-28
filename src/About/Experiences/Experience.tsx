import "./Experience.css";

export function Experience(
    {year, component, isActive, setYearDisplayed, setComponentDisplayed}:
    {
        children: never[],
        year:number, 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        component:any, 
        isActive:boolean,
        setYearDisplayed:React.Dispatch<React.SetStateAction<number>>,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setComponentDisplayed:React.Dispatch<any>
    }){

    const changeYear = () => {
        setYearDisplayed(year);
        setComponentDisplayed(component);
    };

    return (
        <div className="ligne experience">
            <span onClick={changeYear} className={`timeline-page ${isActive ? "timeline-page-active" : ""}`}>
                {year}
            </span>
        </div>
    );
}