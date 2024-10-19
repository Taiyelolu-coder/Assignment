import Header from "../../Static/Header/Header"
import Hero from "../../components/Hero/Hero"
import Comp from "../../components/Comp/Comp"
import Footer from "../../Static/Footer/Footer"
import AlphaApp from "../../components/Apps/AlphaApp"
import Ios from "../../assets/apple.svg"
import Android from "../../assets/android.svg"
import Figma from "../../assets/figma.svg"
import Chrome from "../../assets/chrome.svg"
import Adobe from "../../assets/adobe.svg"

import "./Home.css"
function Home() {
  

    return (
      <div className="Home-container">
       <Header/>
       <Hero />
       <div className="AllApps">
       <AlphaApp image={Ios} heading="iOS App" text="Create,browse and save palettes on the go." hover=""/>
       <AlphaApp image={Android} heading="Android App" text="Thousands of palettes in your pocket." />
       <AlphaApp image={Figma} heading="Figma Plugin" text="All palettes right in your workplace." />
       <AlphaApp image={Chrome} heading="Chrome Extension" text="Get and edit a palette every new tab." />
       <AlphaApp image={Adobe} heading="Adobe Extension" text="Use Coolors with your favorite tools" />
       
       </div>
       <Comp />
       <Footer />
      </div>
    )
  }
  
  export default Home