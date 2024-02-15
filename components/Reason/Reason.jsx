import React from "react";
import "./Reason.css"
import Image1 from "../../assets/image1.png"
import Image2 from "../../assets/image2.png"
import Image3 from "../../assets/image3.png"
import Image4 from "../../assets/image4.png"
import Tick from "../../assets/tick.png";
import NB from "../../assets/nb.png";
import Adidas from "../../assets/adidas.png";
import Nike from "../../assets/nike.png";
function Reason(){
    return(
        <div className="reason" id='reason'>
            <div className="left-r">
                <img src={Image1}/>
                <img src={Image2}/>
                <img src={Image3}/>
                <img src={Image4}/>
            </div>
            <div className="right-r">
                <span>Some Reasons</span>
                <div> <span className="stroke-text">Why</span> <span>Choose Us?</span></div>
                <div className="prg"><img src={Tick}/> <span> Over 140+ Expert Coaches</span></div>
                <div className="prg"><img src={Tick}/> <span> Train Smarter and Faster Than Before</span></div>
                <div className="prg"><img src={Tick}/> <span> 1 Free Program for New Member</span></div>
                <div className="prg"><img src={Tick}/> <span> Reliable partners  </span></div>
                <div >
                    <span> our partners</span>
                    <div><img src={NB}/>
                    <img src={Adidas}/>
                    <img src={Nike}/></div>
                </div>
            </div>
        </div>
    )
}
export default Reason;