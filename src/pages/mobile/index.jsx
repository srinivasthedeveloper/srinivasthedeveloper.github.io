import BottomNav from "components/Mobile/BottomNav";
import { useState } from "react";
import ProfileCard from "components/Web/ProfileCard";
import styles from "./styles.module.scss";
import MHome from "components/Mobile/Home";

function Mobile() {

  const [activeNav,setActiveNav] = useState('Home');

  return (
    <div className={styles['container']}>
      <div style={{display:'flex'}}>
        <MHome />
      </div>
      <BottomNav />
    </div>
  );
}

export default Mobile;
