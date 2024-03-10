import { useEffect, useRef } from "react";
import { TrackEvent } from "Utils/DataTracking";
import styles from './styles.module.scss';

export default function ClickAnimation() {
    const clickRef = useRef();
    const mouseOffset = 60;

    useEffect(() => {
        const handleClick = (event) => {
            const { clientX, clientY } = event;
            clickRef.current.style.transform = `translate(${clientX + mouseOffset}px, ${clientY + mouseOffset}px)`;
            const currentCursorClone = clickRef.current.cloneNode(true);
            document.querySelector('#cursor').appendChild(currentCursorClone);
            setTimeout(() => {
                currentCursorClone.remove();
            }, 1100);
            TrackEvent({ element: event });
        };

        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, []);

    return (
        <div id="cursor" className={styles['cursor-div']}>
            <div className={styles['container']} ref={clickRef}>
                <div className={styles['outer-circle']} />
                <div className={styles['inner-circle']} />
                <span className={styles['heart']}>💜</span>
                <span className={styles['circle']}>🟣</span>
                <span className={styles['square']}>🟪</span>
            </div>
        </div>
    );
}