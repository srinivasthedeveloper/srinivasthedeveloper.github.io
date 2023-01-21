import { useEffect, useRef, useState } from "react";
import styles from './styles.module.scss';

export default function ClickAnimation() {
    const clickRef = useRef();
    const [isActive, setActive] = useState(false);

    useEffect(() => {
        let hiderTimeout;
        const handleClick = (event) => {
            clickRef.current.style.top = (event.clientY - 25) + "px";
            clickRef.current.style.left = (event.clientX - 25) + "px";
            console.warn(event.clientX, event.clientY);
            if (hiderTimeout) {
                clearTimeout(hiderTimeout);
                setActive(() => false);
            }
            setActive(() => true);
            hiderTimeout = setTimeout(() => {
                setActive(() => false);
            }, 1000);
        }
        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, []);

    return (
        <div id="cursor">
            <div className={`${styles['container']} ${isActive ? styles['active'] : ''}`} ref={clickRef}>
                <div className={styles['outer-circle']} />
                <div className={styles['inner-circle']} />
                <span className={styles['heart']}>💜</span>
                <span className={styles['circle']}>🟣</span>
                <span className={styles['square']}>🟪</span>
            </div>
        </div>
    )
}