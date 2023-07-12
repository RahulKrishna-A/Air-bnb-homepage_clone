
import './App.css'
import Nav from "./comp/nav.jsx";
import Hero from "./comp/hero.jsx";
import Card from "./comp/card.jsx";

import jason from "./assets/katie-zaferes.png"
function App() {
  return (
      <div>
    <Nav/>
      <Hero/>
        <div className={"cardSpace"}>
        <Card img={jason} rating={5.0} reviewCount={6} country={"USA"} title={"Life Lessons with Katie Zaferes"} price={136}/>
        <Card rating={5.0} reviewCount={6} country={"USA"} title={"Life Lessons with Katie Zaferes"} price={136}/>
      </div>
      </div>
  )
}

export default App
