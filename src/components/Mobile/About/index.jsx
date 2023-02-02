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
        </div>
    )
}