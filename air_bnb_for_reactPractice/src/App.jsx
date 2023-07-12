import './App.css'
import Nav from "./comp/nav.jsx";
import Hero from "./comp/hero.jsx";
import Card from "./comp/card.jsx";

import datalist from "./comp/data.js"

import jason from "../public/assets/katie-zaferes.png"

function App() {
    const jsxdatalist = datalist.map(function (datas) {
        return (<Card
            img={`./assets/${datas.coverImg}`}
            rating={datas.stats.rating}
            reviewCount={datas.stats.reviewCount}
            country={datas.location}
            title={datas.title}
            price={datas.price}
            openSpots={datas.openSpots}
        />)
    })
    return (
        <div>
            <Nav/>
            <Hero/>
            <div className={"cardSpace"}>
                {jsxdatalist}
                {jsxdatalist}
            </div>
        </div>
    )
}

export default App
