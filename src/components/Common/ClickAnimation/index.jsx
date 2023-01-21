import { useEffect, useRef, useState } from "react";
import styles from './styles.module.scss';

export default function ClickAnimation() {
    const clickRef = useRef();

    useEffect(() => {
        let hiderTimeout;
        const handleClick = (event) => {
            clickRef.current.style.top = (event.clientY - 25) + "px";
            clickRef.current.style.left = (event.clientX - 25) + "px";
            let currentCursorClone = clickRef.current.cloneNode(true);
            document.querySelector('#cursor').appendChild(currentCursorClone);
            hiderTimeout = setTimeout(() => {
                currentCursorClone.remove();
            }, 1100);
        }
        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, []);

    return (
        <div id="cursor" className={styles['cursor-div']}>
            <div className={`${styles['container']}`} ref={clickRef}>
                <div className={styles['outer-circle']} />
                <div className={styles['inner-circle']} />
                <span className={styles['heart']}>💜</span>
                <span className={styles['circle']}>🟣</span>
                <span className={styles['square']}>🟪</span>
            </div>
        </div>
    )
}