import { useEffect, useRef } from "react";

import useOnScreen from "Utils/useOnScreen";
import styles from "./styles.module.scss";

export default function MAbout({ activeNav, setActiveNav = () => { } }) {

    const aboutRef = useRef();
    const isVisible = useOnScreen(aboutRef);

    useEffect(() => {
        if (isVisible && activeNav !== 'About') {
            setActiveNav("About");
        }
    }, [isVisible])


    return (
        <div className={styles['container']} ref={aboutRef} id={'About-mview'}>
            <div>
                <span>Hello Buddy...👋</span>
            </div>
            <div>
                <span>I'm Srinivas.K (The Developer)</span>
                <span>A Computerphile and also a people person</span>
                <span>Front-end Developer (web,mobile)</span>
                <span>ReactJs, ReactNative are my favorite frameworks</span>
                <span>Python, Javascript are my favorite languages</span>
                <span>I use django, Node js for backend development</span>
            </div>
        </div>
    )
}