import styles from "./styles.module.scss";
import home from "assets/image/bottomNav/home.png";
import homeFilled from "assets/image/bottomNav/home-filled.png";
import about from "assets/image/bottomNav/about.png";
import aboutFilled from "assets/image/bottomNav/about-filled.png";
import contact from "assets/image/bottomNav/contact.png";
import contactFilled from "assets/image/bottomNav/contact-filled.png";
import resume from "assets/image/bottomNav/resume.png";
import resumeFilled from "assets/image/bottomNav/resume-filled.png";
import work from "assets/image/bottomNav/work.png";
import workFilled from "assets/image/bottomNav/work-filled.png";

export default function BottomNav(){
    return(
        <div className={styles['container']}>
            <div className={styles['item-container']}>
                <img src={true?home:homeFilled} alt=""/>
                <span>Home</span>
            </div>
            <div className={styles['item-container']}>
                <img src={true?about:aboutFilled} alt=""/>
                <span>about</span>
            </div>
            <div className={styles['item-container']}>
                <img src={true?resume:resumeFilled} alt=""/>
                <span>resume</span>
            </div>
            <div className={styles['item-container']}>
                <img src={true?work:workFilled} alt=""/>
                <span>work</span>
            </div>
            <div className={styles['item-container']}>
                <img src={true?contact:contactFilled} alt=""/>
                <span>contact</span>
            </div>
        </div>
    )
}