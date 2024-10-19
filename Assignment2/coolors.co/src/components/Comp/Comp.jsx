import Icon1 from "../../assets/disney.png"
import Icon2 from "../../assets/dreamworks.jpg"
import Icon3 from "../../assets/warnerbros.png"
import Icon4 from "../../assets/netflix.jpg"
import Icon5 from "../../assets/airbnb.png"
import Icon6 from "../../assets/dropbox.png"
import Icon7 from "../../assets/hasbro.jpg"
import Icon8 from "../../assets/ubisoft.jpg"
import Icon9 from "../../assets/ea.jpg"
import Icon10 from "../../assets/apple.png"
import Icon11 from "../../assets/microsoft.png"
import "./Comp.css"




function Comp() {
  

    return (
      <div className="Comp-content">
         <p>Used by 5+ million designers and by top companies </p>
         <div className="Comp-image">
            <img src={Icon1} alt="" />
            <img src={Icon2} alt="" />
            <img src={Icon3} alt="" />
            <img src={Icon4} alt="" />
            <img src={Icon5} alt="" />
            <img src={Icon6} alt="" />
            <img src={Icon7} alt="" />
            <img src={Icon8} alt="" />
            <img src={Icon9} alt="" />
            <img src={Icon10} alt="" />
            <img src={Icon11} alt="" />
         </div>
      </div>
    )
  }
  
  export default Comp