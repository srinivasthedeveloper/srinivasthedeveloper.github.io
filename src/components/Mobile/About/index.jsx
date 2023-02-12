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
            <div className={styles['header']}>
                <span className={styles['title']}>Hello Buddy...👋</span>
            </div>
            <div className={styles['section']}>
                <span className={styles['title']}>I'm Srinivas.K (The Developer)</span>
                <span className={styles['title']}>A Computerphile and also a people person</span>
                <span className={styles['title']}>Working as a Front-end Developer (web,mobile)</span>
                <span className={styles['title']}>NextJs, ReactJs, ReactNative are my favorite frameworks</span>
                <span className={styles['title']}>Javascript and Python are my favorite programming languages</span>
                <span className={styles['title']}>I use django or Node js for backend development</span>
            </div>
        </div>
    )
}