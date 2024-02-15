import React, { useState } from "react";
import "./Testimonials.css";
import {testimonialsData} from "../../data/testimonialsData"
import LeftArrow from "../../assets/leftArrow.png";
import RightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";


function Testimonials(){
    const flag=false;
    const transition={type:"spring", duration:2}
    const [selected,setSelected]=useState(0);
    const lengths=testimonialsData.length;
    return(
        <div className="testimonial">
            <div className="left-t">
                <span>Testimonials</span>
                <span className="stroke-text">What They</span>
                <span>Say About Us</span>
                <motion.span
                key={selected}
                    initial={{left:'-2rem',opacity:0}}
                    whileInView={{left:'0rem',opacity:1}}
                    transition={{...transition,duration:1}}
                    
                > 
                {testimonialsData[selected].review}</motion.span>
                <div><span>{testimonialsData[selected].name}</span>
                <span>-{testimonialsData[selected].status}</span></div>
            </div>
            <div className="right-t">
                <div className="arrows">
                    <img src={LeftArrow} onClick={()=>{
                        selected===0?setSelected(lengths-1):setSelected((prev)=> prev-1);
                        flag=true;
                    }}/>
                    <img src={RightArrow} onClick={()=>{
                        selected==lengths-1?setSelected(0):setSelected((prev)=> prev+1)
                    }}/>
                </div>
                <motion.div
                    initial={{left:"7rem"}}
                    whileInView={{left:"11.5rem"}}
                    transition={transition}
                > </motion.div>
                <motion.div
                    initial={{right:"2rem"}}
                    whileInView={{right:"6rem"}}
                    transition={transition}>

                    </motion.div>
                <motion.img
                key={selected}
                src={testimonialsData[selected].image}
                 initial={{right:"3rem",opacity:0}}
                    whileInView={{right:"7rem",opacity:1}}
                    transition={{...transition,duration:1}}></motion.img>
                    

                 
            </div>
        </div>
    )
}
export default Testimonials;