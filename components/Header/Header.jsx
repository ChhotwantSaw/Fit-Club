import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";
import "./Header.css"

function Header(){
    const mobile=window.innerWidth<=768?true:false;
    const [menuOpened,setMenuOpened]=useState(false);

    return(
        <div className="header">
            <img src={logo} alt="logo" className="logo"/>
            {menuOpened===false && mobile===true?
            (<div 
            style={{padding:'0.5rem',borderRadius:'5px'}}
            onClick={()=>{
                setMenuOpened(true)
            }}>
            <img src={Bars} style={{width:'1.5rem' ,height:'1.5rem'}}/>
            </div>):
            <ul className="nav-bar">
                <li className="nav-item" onClick={()=>{
                    setMenuOpened(false);
                }}>
                <Link
                 onClick={()=>{
                    setMenuOpened(false);
                }}
                span={true}
                to='home'
                smooth={true}>Home</Link>
                </li>
                <li className="nav-item">
                <Link
                 onClick={()=>{
                    setMenuOpened(false);
                }}
                span={true}
                to='programs'
                smooth={true}>Program</Link></li>
                <li className="nav-item">
                <Link
                 onClick={()=>{
                    setMenuOpened(false);
                }}
                span={true}
                to='reason'
                smooth={true}>Why Us</Link></li>
                <li className="nav-item" >
                <Link
                 onClick={()=>{
                    setMenuOpened(false);
                }}
                span={true}
                to='plan'
                smooth={true}>Plans</Link></li>
                <li className="nav-item" >
                <Link
                onClick={()=>{
                    setMenuOpened(false);
                }}
                span={true}
                to='testimonial'
                smooth={true}>
                
                Testimonials
                </Link>
                </li>
            </ul>}
           
        </div>
    )
}
export default Header;