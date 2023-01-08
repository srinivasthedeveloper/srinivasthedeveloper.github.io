import { useEffect, useRef } from "react";
import useOnScreen from "Utils/useOnScreen";
import styles from "./styles.module.scss";

export default function Work({
    activeNav = "",
    setActiveNav = () => { },
    ...props
}) {
    const workRef = useRef();
    const isVisible = useOnScreen(workRef);

    useEffect(() => {
        if (isVisible && activeNav !== 'What I Do') {
            setActiveNav("What I Do");
        }
    }, [isVisible])

    useEffect(() => {
        if (activeNav === 'What I Do') {
            workRef.current.scrollIntoView();
        }
    }, [activeNav])

    return (
        <section className={`${styles['container']}`} ref={workRef}>
            <div className={`${styles['sub-container']}`}>
                <h2 className={`${styles['header']}`}>Experience</h2>
                <div className={`${styles["cards-container"]}`}>
                    {[1, 2, 3].map((item,index) => renderCards(item,index))}
                </div>
            </div>
            <div className={`${styles['sub-container']}`}>
                <h2 className={`${styles['header']}`}>Education</h2>
                <div className={`${styles["cards-container"]}`}>
                    {[0, 1, 2].map((item,index) => renderCards(item,index))}
                </div>
            </div>
        </section>
    )

    function renderCards(item,index) {
        return (
            <div className={`${styles["card"]} ${styles[item%2?"odd":"even"]}`}>
                <span>Company: Zolvit</span>
                <span>Role: Associate Software Engineer</span>
                <span>{`(1-Mar-2022 ... current)`}</span>
                <span>
                    Creating responsive and user friendly websites with
                    React Js and Next Js
                </span>
            </div>
        )
    }

}