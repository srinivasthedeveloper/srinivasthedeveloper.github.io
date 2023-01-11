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

    const experience= [
        {
            place:"Company: Zolvit",
            role:"Role: Associate Software Engineer",
            duration:"1-May-2022 ... current",
            description:"Currently working as a Frontend developer responsible for creating a user-friendly applications using React, Next, and React-Native frameworks",
            id:0,
        },
        {
            place:"Company: Zolvit",
            role:"Role: React-Native Intern",
            duration:"1-Jun-2021 ... 31-Apr-2022 (11 Months)",
            description:"During my internship have learned native mobile application development also have released 7+ versions of Vakilsearch App. Also developed several designs for Vakilsearch website.",
            id:1,
        },
        {
            place:"Company: Innovation Geeks",
            role:"Role: Mentor & Teamplayer",
            duration:"2019 ... 2021",
            description:"Obviously you would have know that i'm a corona batch student thanks to the lock-down i got lot of free time to work on my interested areas. During the period we have formed a student community named THE PASSIONATE PROGRAMMERS with like minded people and done lot of freelancing projects and ofcourse a lof of fun projects too.",
            id:2,
        }
    ]

    const education= [
        {
            place:"College: Sri Eshwar College Of Engineering",
            role:"Role: Student / Mentor / President / Developer",
            duration:"2018 ... 2022",
            description:"I have learned a lot in my college days. I got inspired to do/learn more by my seniors, my fellow friends and obviously my juniors. conducted Mentoring sessions, conducted & managed club activities, done projects for college events and aminity(billing software for canteen)",
            id:1,
        },
        {
            place:"School: N.Kittappa.Municipal.Higher.Secondary.School",
            role:"Role: Student / Nss Caption / Chess Player / Stage Speaker",
            duration:"2014 ... 2018",
            description:"Have done my higher grades",
            id:2,
        },
        {
            place:"School: ",
            role:"Role: Student / Scout Candidate / state Speaker / Chess Player",
            duration:"2005 ... 2014",
            description:"Have completed my lower and middle grades",
            id:3,
        }
    ]

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
                    {experience.map((item,index) => renderCards(item,index))}
                </div>
            </div>
            <div className={`${styles['sub-container']}`}>
                <h2 className={`${styles['header']}`}>Education</h2>
                <div className={`${styles["cards-container"]}`}>
                    {education.map((item,index) => renderCards(item,index))}
                </div>
            </div>
        </section>
    )

    function renderCards(item,index) {
        return (
            <div className={`${styles["card"]} ${styles[item.id%2?"odd":"even"]}`} key={`work-box-${index}`}>
                <span>{item.place}</span>
                <span>{item.role}</span>
                <span>{item.duration}</span>
                <span>{item.description}</span>
            </div>
        )
    }

}