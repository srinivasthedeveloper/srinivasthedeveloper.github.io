import BottomNav from "components/Mobile/BottomNav";
import { useState } from "react";
import styles from "./styles.module.scss";
import MHome from "components/Mobile/Home";
import MAbout from "components/Mobile/About";
import MResume from "components/Mobile/Resume";

function Mobile() {

  const [activeNav, setActiveNav] = useState('Home');

  return (
    <div className={styles['container']}>
      <div className={styles['sub-container']}>
        <MHome activeNav={activeNav} setActiveNav={setActiveNav} />
        <MAbout activeNav={activeNav} setActiveNav={setActiveNav} />
        <MResume activeNav={activeNav} setActiveNav={setActiveNav} />
      </div>
      <BottomNav activeNav={activeNav} setActiveNav={setActiveNav} />
    </div>
  );
}

export default Mobile;
