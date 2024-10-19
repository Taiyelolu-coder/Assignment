import "./Hero.css"
import HeroImage from "../../assets/hero.png"
import ProductHunt from "../../assets/top-post-badge.svg"



function Hero() {
  

    return (
      <div className="hero-container">
        <div className="text-bar">
          <h1>The super fast color palettes generator!</h1>
          <p>Create the perfect palette or get inspired by<br></br> thousands of beautiful color schemes</p>
          <button id="gen-btn">Start the generator</button>
          <button>Explore trending palettes</button>
          <img src={ProductHunt} alt="" /> 
        </div>
        <div>
         <img id="hero-image" src={HeroImage} alt="" />
        </div>
      </div>
    )
  }
  
  export default Hero