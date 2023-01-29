import ProfileAvatar from "components/Common/ProfileAvatar";
import Home from "components/Web/Home";
import styles from "./styles.module.scss";

export default function MHome() {
    return (
        <div className={styles["container"]}>
            <ProfileAvatar />
            <div style={{display:'flex',padding:'0 5px'}}>
                <Home />
            </div>
        </div>
    )
}