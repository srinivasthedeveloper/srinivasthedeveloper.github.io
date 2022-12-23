import Home from "components/Home";
import ProfileCard from "components/ProfileCard";
import styles from "./styles.module.scss";

function Web() {
    return (
        <div className={styles['container']}>
            <div><Home /></div>
            <ProfileCard />
        </div>
    );
}

export default Web;
