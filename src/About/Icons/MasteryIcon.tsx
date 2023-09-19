export function MasteryIcon({marginLeft = true, marginRight = false} : {marginLeft: boolean, marginRight:boolean}){
    const classes:string = 
        `fa-regular fa-circle-check color-success ${marginLeft ? "margin-left-icon" : ""} ${marginRight ? "margin-right-icon" : ""}`;
    return (
        <i className={classes}></i>
    );
}