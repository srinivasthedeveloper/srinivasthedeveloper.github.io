import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const textList = [
    `This is Srinivas K 👋`,
    `a Software Developer🧑‍💻`,
    `who Creates 🕸️ & 📱 apps.`,
]
const listLength = textList.length

export default function Home() {
    const [text, setText] = useState(textList[0]);
    const [writeText, setWriteText] = useState(true);
    const [startAnimate,setAnimate] = useState(false);

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
        setAnimate(true);
        return () => clearInterval(modeInterval);
    }, []);


    return (
        <section className={`${styles['container']} ${startAnimate?styles['animate-container']:''}`}>
            <h1 className={styles['header']}>Hello, World..!</h1>
            <div className={styles['about-text']}>
                <span className={`${styles['animate-text']} ${writeText ? styles['write-animate'] : styles['clear-animate']}`}>{text}</span>
                <span className={styles["blinker"]}>|</span>
            </div>
            <span className={styles['brief']}>
                A person with a creative thoughts and crazy love towards technologies,<br />
                Who Codes/Developes things for fun.
            </span>
            <div className={styles['button-container']}>
                <a href="https://github.com/srinivasthedeveloper" rel="noreferrer" target="_blank" className={styles['reach-me']}>Reach me</a>
            </div>
        </section>
    )
}