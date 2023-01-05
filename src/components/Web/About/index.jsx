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
            <header>About Me</header>
            <span>I'm srinivasTheDeveloper, friendly and socializing person also enjoys being alone with a computer.(used to create chat-bots and voice-assistants in boredom)</span>
            <span>A Computerphile who likes to code even 12+ hrs straight when things got interesting.</span>
            <span>Friendly Languages Js(React, Next, React-Native, Node), Python(Django)</span>
            <span>Languages worked on Java,C++,C</span>
            <span>Simple, Sportive and creative mindset regardless of situation is my 2nd major strength</span>
            <span>my weakness is that I easily dive deep into the current task i'm working on which is quite unhealthy when it involves sitting long time in a hard seat without a break.</span>
            <span>(but don't worry i'm working on some pomodoro breaks and bought a fluffy cushion for starters)</span>
            <span>My hobbies are watching(anime,series,tech talks) listening(songs,podcasts) singing(don't worry you won't have access to my bathroom) reading(comics,books,blogs) writing/typing(crazy code snips, typing games, storeis)</span>
            <button>Wanna know more?</button>
        </section>
    )
}