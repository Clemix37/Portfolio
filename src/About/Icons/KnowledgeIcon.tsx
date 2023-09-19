export function KnowledgeIcon({marginLeft = true, marginRight = false} : {marginLeft: boolean, marginRight:boolean}){
    const classes:string = 
        `fa-solid fa-bars-progress color-secondary ${marginLeft ? "margin-left-icon" : ""} ${marginRight ? "margin-right-icon" : ""}`;
    return (
        <i className={classes}></i>
    );
}