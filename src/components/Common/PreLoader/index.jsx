import styles from "./styles.module.scss";
import pacman from "assets/image/preloader/pacman.svg"

export default function PreLoader(){
    return(<div className={styles['container']}>
        <span className={styles["ball"]} />
        <span className={styles["ball"]} />
        <span className={styles["ball"]} />
        {/* <img fetchpriority="high" alt="" loading="eager" src={pacman} /> */}
    </div>)
}