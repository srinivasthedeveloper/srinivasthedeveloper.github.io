import { useEffect, useRef } from "react";
import useOnScreen from "Utils/useOnScreen";
import styles from "./styles.module.scss";
import resumePdf from "assets/pdf/resume.pdf";

export default function Resume({
    activeNav = "",
    setActiveNav = () => { },
    ...props
}) {
    const resumeRef = useRef();
    const isVisible = useOnScreen(resumeRef);

    useEffect(() => {
        if (isVisible && activeNav !== 'Resume') {
            setActiveNav("Resume");
        }
    }, [isVisible])

    useEffect(() => {
        if (activeNav === 'Resume') {
            resumeRef.current.scrollIntoView();
        }
    }, [activeNav])

    return (
        <section className={`${styles['container']}`} ref={resumeRef}>
            <span className={`${styles['header']}`}>Resume</span>
            <div className={`${styles['resume-container']}`}>
                <iframe
                    className={`${styles['iframe']}`}
                    src={resumePdf}
                />
            </div>
            <div className={styles['button-container']}>
                <a href={resumePdf}
                target="_blank" rel="noreferrer"
                title="download resume"
                download={true}
                className={`${styles['download-btn']}`}
                >Download Resume</a>
            </div>
        </section>
    )
}