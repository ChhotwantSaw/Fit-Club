import React from "react";
import "./Footer.css";
import Git from "../../assets/github.png";
import Insta from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

function Footer(){
    return(
        <div className="footer">
            <hr/>
            <div>
               <div>
               <img src={Git}/>
                <img src={Insta}/>
                <img src={Linkedin}/>
               </div>
               <div>
                <img src={Logo}/>
               </div>
            </div>
            <div className="blur blur-foot-1"></div>
            <div className="blur blur-foot-2"></div>
        </div>
    )
}
export default Footer;