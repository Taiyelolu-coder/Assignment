import "./Footer.css"
import Twitter from "../../assets/twitter_icon.png"
import Facebook from "../../assets/facebook.png"
import Pinterest from "../../assets/pinterest.png"
import Instagram from "../../assets/instagram.png"
import Producthunt from "../../assets/producthunt.png"


function Footer() {
  

    return (
      <div>
        <div className="FooterContent">
          <div className="text">
          <h1>Tools</h1>
          <nav>Generate your palettes</nav>
          <nav>Explore popular palettes</nav>
          <nav>Extract palette from image</nav>
          <nav>Contrast checker</nav>
          <nav>Preview palettes on designs</nav>
          <nav>Recolor your own design</nav>
          <nav>Color picker</nav>
          <nav>Browse free fonts</nav>
          </div>
          <div className="text">
            <h1>More</h1>
            <nav>List of colors <span id="span">NEW</span></nav>
            <nav>Browse gradients</nav>
            <nav>Create a gradient</nav>
            <nav>Make a gradient palette</nav>
            <nav>Image converter</nav>
            <nav>Create a collage</nav>
            <nav>Font Generator</nav>
          </div>
          <div className="sub-text">
            <div>
            <h1>Jobs</h1>
            <nav>Find your next job</nav>
            <nav>Post a job</nav>
            </div>
            <div>
            <h1>Apps</h1>
            <nav>iOS App</nav>
            <nav>Android App</nav>
            <nav>Figma Plugin</nav>
            <nav>Adobe Extension <span id="span">NEW</span></nav>
            <nav>Chrome Extension</nav>
            <nav>Instagram Page</nav>
            </div>
          </div>  
          <div className="text">
            <h1>Company</h1>
            <nav>Pricing</nav>
            <nav>License</nav>
            <nav>Terms of service</nav>
            <nav>Privacy policy</nav>
            <nav>Cookie policy</nav>
            <nav>Manage cookies</nav>
            <nav>Help center</nav>
            <nav>Advertise</nav>
            <nav>Affliate</nav>
            <nav>Contact</nav>
            
          </div>
        </div>
        <div className="Footer-content2">
          <div className="copyright">
            <p>&copy; Coolors by <span id="copyright">Fabrizio Bianchi</span>. From a creative to all the others.</p>
          </div>
          <div className="Socialmedia">
            <img style={{width:"20px"}} src={Twitter} alt="" />
            <img style={{width:"20px"}} src={Facebook} alt="" />
            <img style={{width:"20px"}} src={Pinterest} alt="" />
            <img style={{width:"20px"}} src={Instagram} alt="" />
            <img style={{width:"20px"}} src={Producthunt} alt="" />
          </div>
        </div>
      </div>  
        
      
    )
  }
  
  export default Footer