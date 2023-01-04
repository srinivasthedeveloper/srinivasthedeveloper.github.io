import { useEffect, useRef } from "react";
import useOnScreen from "Utils/useOnScreen";
import styles from "./styles.module.scss";

export default function Work({
    activeNav="",
    setActiveNav=()=>{},
    ...props
}) {
    const workRef = useRef();
    const isVisible = useOnScreen(workRef);

    useEffect(()=>{
        if(isVisible && activeNav!=='What I Do'){
            setActiveNav("What I Do");
        }
    },[isVisible])

    useEffect(()=>{
        if(activeNav==='What I Do'){
            workRef.current.scrollIntoView();
        }
    },[activeNav])

    return (
        <section className={`${styles['container']}`} ref={workRef}>
            <span className={`${styles['header']}`}>What I Do</span>
        </section>
    )
}