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

const routes = [
    {
        name: 'Home',
        icon: home,
        filled: homeFilled
    },
    {
        name: 'About',
        icon: about,
        filled: aboutFilled
    },
    {
        name: 'Resume',
        icon: resume,
        filled: resumeFilled
    },
    // {
    //     name: 'Work',
    //     icon: work,
    //     filled: workFilled
    // },
    // {
    //     name: 'Contact',
    //     icon: contact,
    //     filled: contactFilled
    // }
];

export default function BottomNav({ activeNav = "Home", setActiveNav = () => { } }) {
    return (
        <div className={styles['container']}>
            {routes.map((route, index) => (
                <div
                    key={`bottom-nav-${route.name}-${index}`}
                    onClick={() => {
                        document.getElementById(`${route.name}-mview`).scrollIntoView();
                        // setActiveNav(route.name);
                    }}
                    data-event_data = {JSON.stringify({name:(route?.name)+"-mobile-click",data:{activeNav}})}
                    className={`${styles['item-container']} ${activeNav === route.name ? styles['active-nav'] : ''} event-track`}>
                    <img src={activeNav === route.name ? route.filled : route.icon} alt={route.name} />
                    <span>{route.name}</span>
                </div>
            ))}
        </div>
    )
}