import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import Heart from "../../assets/heart.png";
import HeroImage from "../../assets/hero_image.png" ;
import HeroImageBack from "../../assets/hero_image_back.png" ;
import Calories from "../../assets/calories.png";
import {motion} from "framer-motion";
import NumberCounter from "number-counter";

function Hero(){
    const transition={type:'spring', duration:3};
    const mobile=window.innerWidth<=768?true:false;

    return(
        <div className="hero" id='home'>
        <div className="blur hero-blur"></div>
            <div className="left">
               <Header/>
               {/* the best ad  */}
               <div className="the-best-ad">
               <motion.div
                    initial={{left:mobile?'180px':'238px'}}
                    whileInView={{left:'10px'}}
                    transition={{ ...transition, type:"tween"}}
                    >
               </motion.div>
                <span >The Best Fitness Club in the town</span>
               </div>
               {/* Hero heading  */}
               <div className="hero-text">
                <div>
                    <span className="stroke-text">Shape </span>
                    <span>Your</span>
                </div>
                <div><span>Ideal Body</span>
                </div>
                <div>
                <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                </div>
                
            </div>
                 {/* Hero Figures  */}
                 <div className="figures">
                    <div>
                        <span className="count"> <NumberCounter end={140} start={100} delay="4" preFix="+"/> </span>
                        <span>Expert Coaches</span>
                    </div>
                    <div>
                        <span className="count"> <NumberCounter end={978} start={900} delay="4" preFix="+"/></span>
                        <span>Members Joined</span>
                    </div>
                    <div>
                        <span className="count"> <NumberCounter end={50} start={30} delay="4" preFix="+"/></span>
                        <span>Fitness Programs</span>
                    </div>
                </div>

                {/* Hero buttons  */}
                <div className="hero-btn">
                    <button className="btn"> <span>Get Started</span></button>
                    <button className="btn"> <span>Learn More</span></button>
                </div>
           
            </div>
           {/* Right Side */}
            <div className="right">
                <div className="join-btn">
                    <button className="btn"><span>Join Now</span></button>
                </div>
                <motion.div 
                 initial={{left:"15rem"}}
                 whileInView={{left:'7.5rem'}}
                 transition={transition}
                 className="hr">
                    <img src={Heart}/>
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>
                {/* <img className="hero-img" src={HeroImage}/> */}
                {/* <motion.img */}
                    {/* initial={{left:"-8rem"}} */}
                    {/* whileInView={{left:"-15.7rem"}} */}
                    {/* transition={transition} */}

                 {/* className="hero-img-back" src={HeroImageBack}/> */}
                <motion.div 
                 initial={{left:"-25rem"}}
                 whileInView={{left:'-20rem'}}
                 transition={transition} 
                className="calories-count">
                    <img src={Calories}/>
                    <div>
                        <div>
                            <span className="cal">Calories</span>
                            <span className="cal">Burned</span>
                        </div>
                        <div>
                            <span className="cal-c">220</span>
                            <span className="cal-c">kcal</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
        
    )
}
export default Hero;