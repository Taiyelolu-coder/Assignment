import "./Hero.css"
import HeroImage from "../../assets/image-hero-desktop.png"


function Hero (){
    return(
        <div >
           <img className="heroImage" src={HeroImage} alt="HeroImage" />
        </div>
    )
}

export default Hero