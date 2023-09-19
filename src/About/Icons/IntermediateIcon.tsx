export function IntermediateIcon({marginLeft = true, marginRight = false} : {marginLeft: boolean, marginRight:boolean}){
    const classes:string = 
        `fa-solid fa-arrow-trend-up color-warning ${marginLeft ? "margin-left-icon" : ""} ${marginRight ? "margin-right-icon" : ""}`;
    return (
        <i className={classes}></i>
    );
}