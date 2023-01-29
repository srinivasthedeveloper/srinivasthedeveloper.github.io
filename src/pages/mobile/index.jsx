import BottomNav from "components/Mobile/BottomNav";
import { useState } from "react";
import styles from "./styles.module.scss";
import MHome from "components/Mobile/Home";

function Mobile() {

  const [activeNav, setActiveNav] = useState('Home');

  return (
    <div className={styles['container']}>
      <div className={styles['sub-container']}>
        <MHome />
        {/* <MHome /> */}
      </div>
      <BottomNav />
    </div>
  );
}

export default Mobile;
