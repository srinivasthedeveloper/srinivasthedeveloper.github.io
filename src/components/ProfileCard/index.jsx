import styles from "./styles.module.scss";
import colorProfile from "image/profile/color.png";

export default function ProfileCard() {

    const routes = [
        'Home',
        'About',
        'What I Do',
        'Resume',
        // 'Portfolio',
        // 'Projects',
        'Contact',
    ]

    const quickLinks = [
        {
            image:'',
            link:'',
            title:'',
        },
        {
            image:'',
            link:'',
            title:'',
        },
        {
            image:'',
            link:'',
            title:'',
        },
        {
            image:'',
            link:'',
            title:'',
        },
        
    ]

    return (
        <div className={styles['container']}>
            <div className={styles['profile-container']}>
                <div className={styles['avatar-container']}>
                    <div className={styles['avatar-border']}>
                        <img src={colorProfile} className={styles['avatar']} alt=""/>
                    </div>
                </div>
                <span className={styles['title']}>Srinivas K</span>
            </div>

            <div className={styles['nav-container']}>
                {routes.map((route,index)=>(<span key={`right-nav-${index}`} className={styles['title']}>{route}</span>))}
            </div>

            <div className={styles['contact-container']}>
                {quickLinks.map((item,index)=>(<div key={`quick-link-${index}`}>
                    <a href={item.link} className={styles['link']}>
                        <img alt="" title={item.title} className={styles['image']}/>
                    </a>
                </div>))}
            </div>
        </div>
    )
}