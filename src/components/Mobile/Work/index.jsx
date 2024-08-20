import { useEffect, useRef } from "react";

import useOnScreen from "Utils/useOnScreen";
import styles from "./styles.module.scss";


export default function MWork({ activeNav, setActiveNav = () => { } }) {

    const WorkRef = useRef();
    const isVisible = useOnScreen(WorkRef);

    useEffect(() => {
        if (isVisible && activeNav !== 'Work') {
            setActiveNav("Work");
        }
    }, [isVisible])

    const experience = [
        {
            place: "Company: Zolvit",
            role: "Role: React-Native Intern",
            duration: "1-Jun-2021 ... 31-Apr-2022",
            description: "During my internship have developed native mobile application for  Vakilsearch App, and several designs for Vakilsearch website.",
            id: 0,
        },
        {
            place: "Company: Zolvit",
            role: "Role: Associate Software Engineer",
            duration: "1-May-2022 ... current",
            description: "Currently working as a Frontend developer responsible for creating a user-friendly applications using React, Next, and React-Native frameworks",
            id: 1,
        },
        {
            place: "Company: Innovation Geeks",
            role: "Role: Mentor & Teamplayer",
            duration: "2019 ... 2021",
            description: "we have formed a like minded student community to provide lot of freelancing projects and of course a lof of fun projects too.",
            id: 2,
        }
    ]

    const education = [
        {
            place: "School: N.Kittappa Municipal Higher Secondary School",
            role: "Role: Student / Nss Caption / Chess Player / Stage Speaker",
            duration: "2014 ... 2018",
            description: "Have done my higher grades",
            id: 1,
        },
        {
            place: "College: Sri Eshwar College Of Engineering",
            role: "Role: Student / Mentor / President / Developer",
            duration: "2018 ... 2022",
            description: "I have learned a lot in my college days. I got inspired to do/learn more by my seniors, my fellow friends and obviously my juniors. conducted Mentoring sessions, conducted & managed club activities, done projects for college events and aminity(billing software for canteen)",
            id: 2,
        },
        {
            place: "School: Rotary Matriculation Higher Secondary School",
            role: "Role: Student / Scout Candidate / state Speaker / Chess Player",
            duration: "2005 ... 2014",
            description: "Have completed my lower and middle grades",
            id: 3,
        }
    ]

    return (
        <div className={styles['container']} ref={WorkRef} id={'Work-mview'}>
            <div className={`${styles['sub-container']}`}>
                <h2 className={`${styles['header']}`}>Experience</h2>
                <div className={`${styles["cards-container"]}`}>
                    {experience.map((item, index) => renderCards(item, index))}
                </div>
            </div>
            <div className={`${styles['sub-container']}`}>
                <h2 className={`${styles['header']}`}>Education</h2>
                <div className={`${styles["cards-container"]}`}>
                    {education.map((item, index) => renderCards(item, index))}
                </div>
            </div>
        </div>
    )

    function renderCards(item, index) {
        return (
            <div className={`${styles["card"]} ${styles[item.id % 2 ? "odd" : "even"]}`} key={`work-box-${index}`}>
                <span>{item.place}</span>
                <span>{item.role}</span>
                <span>{item.duration}</span>
                <span>{item.description}</span>
            </div>
        )
    }
}