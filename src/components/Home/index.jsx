import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const textList = [
    `This is Srinivas K 👋`,
    `a Software Developer🧑‍💻`,
    `who Creates 🕸️ & 📱 apps.`,
]
const listLength = textList.length

export default function Home() {
    let textIndex = 0;
    const [text, setText] = useState(textList[0]);
    const [writeText, setWriteText] = useState(true);

    useEffect(() => {
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
        <section className={styles['container']}>
            <h1 className={styles['header']}>Hello, World..!</h1>
            <div className={styles['about-text']}>
                <span className={`${styles['animate-text']} ${writeText ? styles['write-animate'] : styles['clear-animate']}`}>{text}</span>
                <span className={styles["blinker"]}>|</span>
            </div>
            <span className={styles['brief']}>
                A person with a creative thoughts and crazy love towards technologies,<br/>
                Who Codes/Developes things for fun.
            </span>
            <a href="https://github.com/srinivasthedeveloper" target="_blank" className={styles['reach-me']}>Reach me</a>
        </section>
    )
}