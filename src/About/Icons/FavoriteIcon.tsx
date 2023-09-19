export function FavoriteIcon({marginLeft = true, marginRight = false} : {marginLeft: boolean|undefined, marginRight:boolean|undefined}){
    const classes:string = 
        `fa-solid fa-star color-yellow ${marginLeft ? "margin-left-icon" : ""} ${marginRight ? "margin-right-icon" : ""}`;
    return (
        <i className={classes}></i>
    );
}