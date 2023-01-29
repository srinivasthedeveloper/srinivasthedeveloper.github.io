import ProfileAvatar from "components/Common/ProfileAvatar";
import QuickLinks from "components/Common/QuickLinks";
import TypeAnimation from "components/Common/TypeAnimation";
import Home from "components/Web/Home";
import styles from "./styles.module.scss";

const textList = [
    `This is Srinivas K 👋`,
    `I'm a Software Developer🧑‍💻`,
    `I Creates 🕸️ & 📱 apps.`,
];
const listLength = textList.length;

export default function MHome() {
    return (
        <div className={styles["container"]}>
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