import grid from "../../public/assets/photo-grid.png"


export default function Hero(){
    return(
        <div id={"hero-container"}>
            <div className={"hero_image"}>
                <img src={
                    grid
                } alt={"hero img"}/>
            </div>
            <div className={"hero_text"}>
                <p>Online Experiences</p>
                <p> unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
}