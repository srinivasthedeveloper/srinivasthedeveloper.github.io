import { useEffect, useRef } from "react";
import useOnScreen from "Utils/useOnScreen";
import styles from "./styles.module.scss";

export default function Contact({
    activeNav = "",
    setActiveNav = () => { },
    ...props
}) {
    const contactRef = useRef();
    const subjectRef = useRef();
    const bodyRef = useRef();
    const isVisible = useOnScreen(contactRef);

    useEffect(() => {
        if (isVisible && activeNav !== 'Contact') {
            setActiveNav("Contact");
        }
    }, [isVisible])

    useEffect(() => {
        if (activeNav === 'Contact') {
            contactRef.current.scrollIntoView();
        }
    }, [activeNav])

    return (
        <section className={`${styles['container']}`} ref={contactRef}>
            <span className={`${styles['header']}`}>Contact Me</span>
            <div className={`${styles['form-container']}`}>
                <input ref={subjectRef} className={`${styles['subject']}`} placeholder="Tell me what is about" />
                <textarea ref={bodyRef} className={`${styles['body']}`} placeholder="Here goes your message..." />
                <a 
                    href={`mailto:srinivasthedeveloper@gmail.com?subject=${subjectRef?.current?.value}&body=${bodyRef?.current?.value}`}
                    className={`${styles['submit']}`}
                >Send Message</a>
            </div>
            <span className={`${styles['note']}`}>Note:- Either fill up your message here or in your compose mail, because the submit button will take you to your mailer application.</span>
        </section>
    )
}