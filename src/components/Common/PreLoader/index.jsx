import styles from "./styles.module.scss";
import pacman from "image/preloader/pacman.svg"

export default function PreLoader(){
    return(<div className={styles['container']}>
        <img fetchpriority="high" alt="" loading="eager" src={pacman} />
    </div>)
}