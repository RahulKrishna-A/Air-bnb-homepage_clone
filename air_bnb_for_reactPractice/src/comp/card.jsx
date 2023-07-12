import "../card.css"
import Star from "../../public/assets/star.png"
export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} className="card--image"  alt={"dp"}/>
            <div className="card--stats">
                <img src={Star} className="card--star" alt={"*"} />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
            {props.openSpots===0 && <div className={"sold"}>SOLD OUT</div>}
        </div>
    )
}