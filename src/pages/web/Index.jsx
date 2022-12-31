import { useState } from "react";
import Home from "components/Home";
import ProfileCard from "components/ProfileCard";
import styles from "./styles.module.scss";

function Web() {

    const [activeNav,setActiveNav] = useState('Home');

    return (
        <div className={styles['container']}>
            <div className={styles['sub-container']}>
                <Home />
            </div>
            <ProfileCard activeNav={activeNav} setActiveNav={setActiveNav} />
        </div>
    );
}

export default Web;
