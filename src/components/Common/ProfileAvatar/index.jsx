import colorProfile from "assets/image/profile/color.png";
import styles from "./styles.module.scss";

export default function ProfileAvatar({ showTitle = true }) {
    return (
        <div className={styles['profile-container']}>
            <div className={styles['avatar-container']}>
                <div className={styles['avatar-border']}>
                    <img loading="eager" src={colorProfile} title="srinivasthedeveloper" className={styles['avatar']} width="170px" height="222px" alt="profile" />
                </div>
            </div>
            {showTitle ? <span className={styles['title']}>Srinivas K</span> : null}
        </div>
    )
}