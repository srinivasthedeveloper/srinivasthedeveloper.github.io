import styles from "./styles.module.scss";

export default function Home(){
    return (
        <div className={styles['container']}>
            <h1 className={styles['Header']}>Welcome</h1>
            <span className={styles['about-text']}>I'm a Software Developer</span>
            <span className={styles['location']}>currently living in chennai</span>
            <button className={styles['reach-me']}>Reach me</button>
        </div>
    )
}