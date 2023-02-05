import { useEffect, useRef } from "react";

import ProfileAvatar from "components/Common/ProfileAvatar";
import QuickLinks from "components/Common/QuickLinks";
import TypeAnimation from "components/Common/TypeAnimation";
import styles from "./styles.module.scss";
import useOnScreen from "Utils/useOnScreen";

const textList = [
    `This is Srinivas K 👋`,
    `I'm a Software Developer🧑‍💻`,
    `I Creates 🕸️ & 📱 apps.`,
];
const listLength = textList.length;

export default function MHome({ activeNav, setActiveNav = () => { } }) {

    const homeRef = useRef();
    const isVisible = useOnScreen(homeRef);

    useEffect(() => {
        if (isVisible && activeNav !== 'Home') {
            setActiveNav("Home");
        }
    }, [isVisible])

    return (
        <div className={styles["container"]} ref={homeRef} id={'Home-mview'}>
            <ProfileAvatar showTitle={false} />
            <TypeAnimation textList={textList} listLength={listLength} />
            <span className={styles['brief']}>
                A person with a creative thoughts and crazy love towards technologies,<br />
                Who Codes/Developes things with love.
            </span>
            <div className={styles['contacts']}>
                <span className={styles['reach-me']}>Reach Me</span>
                <QuickLinks />
            </div>
        </div>
    )
}