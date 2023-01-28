import BottomNav from "components/Mobile/BottomNav";
import { useState } from "react";
// import ProfileCard from "components/Web/ProfileCard";
import styles from "./styles.module.scss";

function Mobile() {

  const [activeNav,setActiveNav] = useState('Home');

  return (
    <div className={styles['container']}>
      <BottomNav />
      {/* <ProfileCard activeNav={activeNav} setActiveNav={setActiveNav}/> */}
    </div>
  );
}

export default Mobile;
