import React from "react";
import "./Plan.css";
import { plansData } from "../../data/plansData";
import Tick from "../../assets/whiteTick.png";
import RightArrow from "../../assets/rightArrow.png";


function Plan(){
    return(
        <div className="plan" id='plan'>
        <div className="blur blur-plan-1"></div>
        <div className="blur blur-plan-2"></div>
            <div>
                <span className="stroke-text">Ready to start</span>
                <span >Your journey</span>
                <span className="stroke-text"> Now withus</span>
            </div>
           <div>
           {  plansData.map((plans)=>(
                <div className="plan-card">
                     {plans.icon}
                    <span>{plans.name}</span>
                    <span> $ { plans.price}</span>
                    <div>
                        <div><img src={Tick}/> <span>{plans.features[0]}</span></div>
                        <div><img src={Tick}/> <span>{plans.features[1]}</span></div>
                        <div><img src={Tick}/>  <span>{plans.features[2]}</span></div>
                          
                    </div>
                    <span> See more benefits -> </span>
                    <button><span>Join Now</span></button>
                </div>
             ))}
             
           </div>
        </div>
    );
}
export default Plan;