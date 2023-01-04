import { useEffect, useRef } from "react";
import useOnScreen from "Utils/useOnScreen";
import styles from "./styles.module.scss";

export default function About({
    activeNav="",
    setActiveNav=()=>{},
    ...props
}) {
    const aboutRef = useRef();
    const isVisible = useOnScreen(aboutRef);

    useEffect(()=>{
        if(isVisible && activeNav!=='About'){
            setActiveNav("About");
        }
    },[isVisible])

    useEffect(()=>{
        if(activeNav==='About'){
            aboutRef.current.scrollIntoView();
        }
    },[activeNav])

    return (
        <section className={`${styles['container']}`} ref={aboutRef}>
            <span className={`${styles['header']}`}>About</span>
        </section>
    )
}