import { useEffect, useState, useRef } from "react";
import useOnScreen from "Utils/useOnScreen";
import styles from "./styles.module.scss";

const textList = [
    `This is Srinivas K 👋`,
    `a Software Developer🧑‍💻`,
    `who Creates 🕸️ & 📱 apps.`,
]
const listLength = textList.length

export default function Home({
    activeNav="",
    setActiveNav=()=>{}
}) {
    const [text, setText] = useState(textList[0]);
    const [writeText, setWriteText] = useState(true);
    const [startAnimate,setAnimate] = useState(false);
    const homeRef = useRef();
    const isVisible = useOnScreen(homeRef);

    useEffect(()=>{
        if(isVisible && activeNav!=='Home'){
            setActiveNav("Home");
        }
    },[isVisible])

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

    useEffect(()=>{
        if(activeNav==='Home'){
            // homeRef.current.scrollIntoView();
        }
    },[activeNav]);


    return (
        <section ref={homeRef} className={`${styles['container']} ${startAnimate?styles['animate-container']:''}`} id={'home-view'}>
            <span className={styles['header']}>Hello, World..!</span>
            <h1 style={{display:'none'}}>srinivas the developer personal portfolio</h1>
            <div className={styles['about-text']}>
                <span className={`${styles['animate-text']} ${writeText ? styles['write-animate'] : styles['clear-animate']}`}>{text}</span>
                <span className={styles["blinker"]}>|</span>
            </div>
            <span className={styles['brief']}>
                A person with a creative thoughts and crazy love towards technologies,<br />
                Who Codes/Developes things for fun.
            </span>
            <div className={styles['button-container']}>
                <a title="github profile" href="https://github.com/srinivasthedeveloper" rel="noreferrer" target="_blank" className={styles['reach-me']}>Git Profile</a>
            </div>
        </section>
    )
}