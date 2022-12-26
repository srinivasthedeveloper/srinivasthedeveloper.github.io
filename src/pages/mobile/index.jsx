import ProfileCard from "components/ProfileCard";
import styles from "./styles.module.scss";

function Mobile() {
  return (
    <div className={styles['container']}>
      <ProfileCard />
    </div>
  );
}

export default Mobile;
