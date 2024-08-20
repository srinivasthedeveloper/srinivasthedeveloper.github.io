import { useEffect, useRef } from "react";

import useOnScreen from "Utils/useOnScreen";
import styles from "./styles.module.scss";
import resumePdf from "assets/pdf/resume.pdf";
import page1 from "assets/image/resume/1.png";


export default function MResume({ activeNav, setActiveNav = () => { } }) {

    const ResumeRef = useRef();
    const isVisible = useOnScreen(ResumeRef);

    useEffect(() => {
        if (isVisible && activeNav !== 'Resume') {
            setActiveNav("Resume");
        }
    }, [isVisible])


    return (
        <div className={styles['container']} ref={ResumeRef} id={'Resume-mview'}>
            <span className={`${styles['header']}`}>Resume</span>
            <div className={`${styles['resume-container']}`}>
                <img
                    src={page1}
                    loading="eager"
                    alt={"Resume Page 1"}
                    title={"Resume Page 1"}
                />
            </div>

            <div className={styles['button-container']}>
                <a href={resumePdf}
                    target="_blank" rel="noreferrer"
                    title="download resume"
                    download="Srinivas_K (The Developer) Resume.pdf"
                    className={`${styles['download-btn']}`}
                >Download Resume</a>
            </div>
        </div>
    )
}