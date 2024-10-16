import DataBiz from "../../assets/client-databiz.svg"
import Audiophile from "../../assets/client-audiophile.svg"
import Meet from "../../assets/client-meet.svg"
import Maker from "../../assets/client-maker.svg"

import "./Footer.css"


function Footer (){
    return(
        
    <div class="footer">
        <img src={DataBiz} alt="" />
        <img src={Audiophile} alt="" />
        <img src={Meet} alt="" />
        <img src={Maker} alt="" />
    </div>
        
    )
}

export default Footer