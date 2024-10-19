import"./Header.css"
import Logo from"../../assets/logo.svg"
import IconMenu from"../../assets/icon-menu.svg"

function Header (){
    return(
        <div className="container">

            <div className="logoNav">
                <img src={Logo} alt="logo" />
            </div>   

            <div className="link-wrapper">    
                <div className="nav">
                    <nav>Feature</nav>
                    <nav>Company</nav>
                    <nav>Careers</nav>
                    <nav>About</nav>
                            
                </div>
                     
                    
                <div className="loginBtn">
                    <nav>Login</nav>
                    <button className="btn1">Register</button>
                </div>
                    
               
            </div> 
            <div id="iconMenu">
                <img id="iconMenu"src={IconMenu} alt="" />
            </div>
        </div>
    )
}

export default Header