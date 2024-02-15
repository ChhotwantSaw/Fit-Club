import React from "react";
import "./Program.css";
import {programsData} from "../../data/programsData.js"
import RightArrow from "../../assets/rightArrow.png";

function Program(){
    return(
        <div className="programs" id="programs">
            {/* Header */}
            <div className="headers">
                <span className='stroke-text'>Explore Our</span>
                <span>programs</span>
                <span className='stroke-text'>To Shape You</span>
            </div>
            <div className="program-categories">
                {programsData.map((pr)=>( 
                    <div className="category">
                        {pr.image}
                        <span>{pr.heading}</span>
                        <span>{pr.details}</span>
                        <div> <span>Join Now </span><img src={RightArrow}/></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Program;