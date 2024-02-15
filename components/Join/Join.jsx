import React from "react";
import "./Join.css";
function Join(){
    return(
        <div className="joins">
            <div className="join">
            <div></div>
            <div>
              <span className="stroke-text">Ready to</span>
              <span>Level up</span>
            </div>
            <div>
              <span >Your Body</span>
              <span className="stroke-text">With Us?</span>
            </div>
            
           </div>
           <div className="join-r"> 
                <div><input placeholder="Enter Your Email Address"/> <button><span>Join Now</span></button></div>
           
           </div>
        </div>
    )
}
export default Join;