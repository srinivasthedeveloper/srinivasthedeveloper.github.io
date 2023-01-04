import { useEffect, useRef } from "react";
import useOnScreen from "Utils/useOnScreen";
import styles from "./styles.module.scss";

export default function Contact({
    activeNav="",
    setActiveNav=()=>{},
    ...props
}) {
    const contactRef = useRef();
    const isVisible = useOnScreen(contactRef);

    useEffect(()=>{
        if(isVisible && activeNav!=='Contact'){
            setActiveNav("Contact");
        }
    },[isVisible])

    useEffect(()=>{
        if(activeNav==='Contact'){
            contactRef.current.scrollIntoView();
        }
    },[activeNav])

    return (
        <section className={`${styles['container']}`} ref={contactRef}>
            <span className={`${styles['header']}`}>Contact</span>
        </section>
    )
}