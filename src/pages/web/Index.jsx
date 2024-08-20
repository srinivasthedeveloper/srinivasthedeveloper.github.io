import { useState } from "react";
import Home from "components/Web/Home";
import About from "components/Web/About";
import ProfileCard from "components/Web/ProfileCard";
import styles from "./styles.module.scss";
import Work from "components/Web/Work";
import Resume from "components/Web/Resume";
import Contact from "components/Web/Contact";

function Web() {
    const [activeNav,setActiveNav] = useState('Home');

    return (
        <div className={styles['container']}>
            <div className={styles['sub-container']}>
                <Home activeNav={activeNav} setActiveNav={setActiveNav}/>
                <About activeNav={activeNav} setActiveNav={setActiveNav}/>
                {/* <Work activeNav={activeNav} setActiveNav={setActiveNav}/> */}
                <Resume activeNav={activeNav} setActiveNav={setActiveNav}/>
                {/* <Contact activeNav={activeNav} setActiveNav={setActiveNav}/> */}
            </div>
            <ProfileCard activeNav={activeNav} setActiveNav={setActiveNav} />
        </div>
    );
}

export default Web;
