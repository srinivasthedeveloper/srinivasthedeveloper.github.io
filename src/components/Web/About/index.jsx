import { useEffect, useRef, useState } from "react";
import useOnScreen from "Utils/useOnScreen";
import styles from "./styles.module.scss";

export default function About({
    activeNav = "",
    setActiveNav = () => { },
    ...props
}) {
    const aboutRef = useRef();
    const isVisible = useOnScreen(aboutRef);
    const [activeText, setActiveText] = useState('');
    const emailLink = "mailto:srinivasthedeveloper@gmail.com?subject=Greetings Developer!&body=I\'ve came across your portfolio and found that interesting and I would like to have a word about, {YOUR_MESSAGE}";

    useEffect(() => {
        if (isVisible && activeNav !== 'About') {
            setActiveNav("About");
        }
    }, [isVisible])

    useEffect(() => {
        if (activeNav === 'About') {
            aboutRef.current.scrollIntoView();
        }
    }, [activeNav])

    return (
        <section className={`${styles['container']}`} ref={aboutRef}>
            <div className={`${styles['header']}`}>
                <h2 className={`${styles['title']}`}>Let Me <span>Introduce</span> Myself</h2>
            </div>
            <div className={`${styles['main']}`}>
                <span className={`${styles['about-text']}`} onClick={() => { setActiveText(activeText === '1' ? '' : '1') }}>
                    <span className={styles['expand']}>{`${activeText === '1' ? '[-]' : ['[+]']}`}</span>
                    I'm <span className={styles['highlight']}>srinivasTheDeveloper👋</span>
                    <span
                        className={`${styles['hidden-text']}`}
                        style={{ display: activeText === '1' ? "unset" : "none" }}>, sweet🍩 and socializing🍻 person, also enjoys being alone with a computer👨‍💻.<br />(used to create chat-bots and voice-assistants in boredom)</span>
                </span>

                <span className={`${styles['about-text']}`} onClick={() => { setActiveText(activeText === '2' ? '' : '2') }}>
                    <span className={styles['expand']}>{`${activeText === '2' ? '[-]' : ['[+]']}`}</span>
                    A Computerphile🤓
                    <span
                        className={`${styles['hidden-text']}`}
                        style={{ display: activeText === '2' ? "unset" : "none" }}> who likes to code even 12+hrs🥳 straight when things got interesting.✨</span>
                </span>

                <span className={`${styles['about-text']}`} onClick={() => { setActiveText(activeText === '3' ? '' : '3') }}>
                    <span className={styles['expand']}>{`${activeText === '3' ? '[-]' : ['[+]']}`}</span>
                    Friendly Languages
                    <span
                        className={`${styles['hidden-text']}`}
                        style={{ display: activeText === '3' ? "unset" : "none" }}> ⚛Js(React, Next, React-Native, Node), 🐍Python(Django)</span>
                </span>

                <span className={`${styles['about-text']}`} onClick={() => { setActiveText(activeText === '4' ? '' : '4') }}>
                    <span className={styles['expand']}>{`${activeText === '4' ? '[-]' : ['[+]']}`}</span>
                    Languages worked on🏋️
                    <span
                        className={`${styles['hidden-text']}`}
                        style={{ display: activeText === '4' ? "unset" : "none" }}>Java,C++,C...(except php😅)</span>
                </span>

                <span className={`${styles['about-text']}`} onClick={() => { setActiveText(activeText === '5' ? '' : '5') }}>
                    <span className={styles['expand']}>{`${activeText === '5' ? '[-]' : ['[+]']}`}</span>
                    <span
                        className={`${styles['hidden-text']}`}
                        style={{ display: activeText === '5' ? "unset" : "none" }}>Simple😌, Sportive🧗‍♂️ and creative🧑‍🎨 mindset are my 2nd major </span>
                    💪strength
                </span>

                <span className={`${styles['about-text']}`} onClick={() => { setActiveText(activeText === '6' ? '' : '6') }}>
                    <span className={styles['expand']}>{`${activeText === '6' ? '[-]' : ['[+]']}`}</span>
                    my weakness😱
                    <span
                        className={`${styles['hidden-text']}`}
                        style={{ display: activeText === '6' ? "unset" : "none" }}> is that I easily dive🤿 deep into the current task i'm working🧘 on which is quite unhealthy when it involves sitting long time in a hard seat without a break.<br />(but don't worry😉 i'm working on some pomodoro🕓 breaks and bought a fluffy🐑 cushion for starters)</span>
                </span>

                <span className={`${styles['about-text']}`} onClick={() => { setActiveText(activeText === '7' ? '' : '7') }}>
                    <span className={styles['expand']}>{`${activeText === '7' ? '[-]' : ['[+]']}`}</span>My hobbies
                    <span
                        className={`${styles['hidden-text']}`}
                        style={{ display: activeText === '7' ? "unset" : "none" }}> are<br />🙈watching(anime,series,tech talks)<br />🙉listening(songs,podcasts)<br />🙊singing(while 🚿ing)<br />😎reading(comics,books,blogs)<br />🤙writing/typing(crazy codes👾, typing⌨️games, 🌀storeis)</span>
                </span>
                <span className={`${styles['about-text']}`} style={{cursor:'default'}}>
                    Hope you get some overview about me🤞, feel free to reach me🤗 if you have something to say or ask🤔 I would be happy to help you🧞.
                </span>
            </div>
            <div className={`${styles['footer']}`}>
                <a  rel="noreferrer" target="_blank" title="Email Me" className={`${styles['know-more']}`} href={emailLink}>{"👉 Email me 👈"}</a>
            </div>
        </section>
    )
}