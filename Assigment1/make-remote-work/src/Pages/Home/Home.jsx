import Header from "../../static/Header/Header"
import TextBar from "../../Component/TextBar/TextBar"
import Hero from "../../Component/Hero/Hero"
import Footer from "../../static/Footer/Footer"
import "./Home.css"

function Home() {
  

    return (
      <div  style={{
        // border:"1px solid pink",
        // height:"40vh",

      }}>
      
         <Header />
         <div className="hero-text">
            <div className="text-footer">
            <TextBar />
            <Footer />
            </div>
            <Hero />
         </div>
      </div>
    )
  }

export default Home