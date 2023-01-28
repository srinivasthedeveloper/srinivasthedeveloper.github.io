import { useState } from "react";

import styles from "./styles.module.scss";
import home from "assets/image/bottomNav/home.png";
import homeFilled from "assets/image/bottomNav/home-filled.png";
import about from "assets/image/bottomNav/about.png";
import aboutFilled from "assets/image/bottomNav/about-filled.png";
import contact from "assets/image/bottomNav/contact.png";
import contactFilled from "assets/image/bottomNav/contact-filled.png";
import resume from "assets/image/bottomNav/resume.png";
import resumeFilled from "assets/image/bottomNav/resume-filled.png";
import work from "assets/image/bottomNav/work.png";
import workFilled from "assets/image/bottomNav/work-filled.png";

export default function BottomNav(){
    const [isActive,setActive] = useState('home');
    return(
        <div className={styles['container']}>
            <div
                onClick={()=>{setActive('home')}}
                className={`${styles['item-container']} ${isActive==='home'?styles['active-nav']:''}`}>
                <img src={isActive==='home'?homeFilled:home} alt=""/>
                <span>Home</span>
            </div>
            <div
                onClick={()=>{setActive('about')}}
                className={`${styles['item-container']} ${isActive==='about'?styles['active-nav']:''}`}>
                <img src={isActive==='about'?aboutFilled:about} alt=""/>
                <span>about</span>
            </div>
            <div
                onClick={()=>{setActive('resume')}}
                className={`${styles['item-container']} ${isActive==='resume'?styles['active-nav']:''}`}>
                <img src={isActive==='resume'?resumeFilled:resume} alt=""/>
                <span>resume</span>
            </div>
            <div
                onClick={()=>{setActive('work')}}
                className={`${styles['item-container']} ${isActive==='work'?styles['active-nav']:''}`}>
                <img src={isActive==='work'?workFilled:work} alt=""/>
                <span>work</span>
            </div>
            <div
                onClick={()=>{setActive('contact')}}
                className={`${styles['item-container']} ${isActive==='contact'?styles['active-nav']:''}`}>
                <img src={isActive==='contact'?contactFilled:contact} alt=""/>
                <span>contact</span>
            </div>
        </div>
    )
}