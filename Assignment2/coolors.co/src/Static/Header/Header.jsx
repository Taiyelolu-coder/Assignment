import "./header.css"
import Logo from "../../assets/coolors.png"
import Hamburger from"../../assets/hamburger.jpg"


function Header() {
  

    return (
      <div className="headContainer">
         <img id="Logo" style={{width:"110px"}} src={Logo} alt=""/>
         <div className="navBar">
          <nav>Tools</nav>
          <nav><span style={{background:"none",
                             color:"#ff0096",
                            fontSize:"17px",
                          fontWeight:"500"}}
                             >Go Pro</span></nav>
          <nav>Sign in</nav>
          <button id="cta">Sign up</button>
         </div>
         <img id="hamburger" style={{width:"50px"}} src={Hamburger} alt="" />
      </div>
    )
  }
  
  export default Header