import "./Stars.scss";

export function Stars(){
    const nbStars = 20;
    const stars = [];
    for (let i = 0; i < nbStars; i++, stars[i] = i);
    
    return (
        <div className="night">
            {
                stars.map((star) => (
                    <div key={star} className="shooting_star"></div>
                ))
            }
        </div>
    );
}