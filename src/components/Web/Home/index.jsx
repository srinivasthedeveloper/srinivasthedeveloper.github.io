import TypeAnimation from "components/Common/TypeAnimation";
import { useEffect, useState, useRef } from "react";
import useOnScreen from "Utils/useOnScreen";
import styles from "./styles.module.scss";

const textList = [
    `This is Srinivas K 👋`,
    `I'm a Software Developer🧑‍💻`,
    `I Creates 🕸️ & 📱 apps.`,
];
const listLength = textList.length;

export default function Home({
    activeNav = "",
    setActiveNav = () => { }
}) {
    const homeRef = useRef();
    const isVisible = useOnScreen(homeRef);
    const [startAnimate, setAnimate] = useState(false);

    useEffect(() => {
        if (isVisible && activeNav !== 'Home') {
            setActiveNav("Home");
        }
    }, [isVisible])

    useEffect(() => {
        setAnimate(true);
    }, [])

    useEffect(() => {
        if (activeNav === 'Home') {
            // homeRef.current.scrollIntoView();
        }
    }, [activeNav]);


    return (
        <section ref={homeRef} className={`${styles['container']} ${startAnimate ? styles['animate-container'] : ''}`} id={'home-view'}>
            <span className={styles['header']}>Hello, World..!</span>
            <h1 style={{ display: 'none' }}>srinivas the developer personal portfolio</h1>
            <TypeAnimation textList={textList} listLength={listLength} />
            <span className={styles['brief']}>
                A person with a creative thoughts and crazy love towards technologies,<br />
                Who Codes/Developes things with love.
            </span>
            <div className={styles['button-container']}>
                <a title="github profile" href="https://github.com/srinivasthedeveloper" rel="noreferrer" target="_blank" className={styles['reach-me']}>Git Profile</a>
            </div>
        </section>
    )
}