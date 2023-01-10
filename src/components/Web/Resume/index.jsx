import { useEffect, useRef } from "react";
import useOnScreen from "Utils/useOnScreen";
import styles from "./styles.module.scss";

export default function Resume({
    activeNav="",
    setActiveNav=()=>{},
    ...props
}) {
    const resumeRef = useRef();
    const isVisible = useOnScreen(resumeRef);

    useEffect(()=>{
        if(isVisible && activeNav!=='Resume'){
            setActiveNav("Resume");
        }
    },[isVisible])

    useEffect(()=>{
        if(activeNav==='Resume'){
            resumeRef.current.scrollIntoView();
        }
    },[activeNav])

    return (
        <section className={`${styles['container']}`} ref={resumeRef}>
            <span className={`${styles['header']}`}>Resume</span>
            <div>
            </div>
        </section>
    )
}