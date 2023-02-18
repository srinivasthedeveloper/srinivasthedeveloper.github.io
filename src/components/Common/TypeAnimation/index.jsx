import { useEffect, useState } from "react";

import styles from "./styles.module.scss";

export default function TypeAnimation({ textList = [], listLength = 0 }) {

    const [text, setText] = useState(textList[0]);
    const [writeText, setWriteText] = useState(true);

    useEffect(() => {
        let textIndex = 0;
        const textInterval = setInterval(() => {
            textIndex++;
            setText(prev => textList[textIndex % listLength])
        }, 6000);
        return () => clearInterval(textInterval);
    }, []);

    useEffect(() => {
        const modeInterval = setInterval(() => {
            setWriteText(prev => !prev);
        }, 3000);
        return () => clearInterval(modeInterval);
    }, []);

    return (
        Boolean(listLength) ? (<div className={styles['about-text']}>
            <span className={`${styles['animate-text']} ${writeText ? styles['write-animate'] : styles['clear-animate']}`} dangerouslySetInnerHTML={{__html:text}} />
            <span className={styles["blinker"]}>|</span>
        </div>) : null
    )
}