import styles from "./styles.module.scss";
import colorProfile from "image/profile/color.png";
import github from "image/contact/github.svg";
import linkedin from "image/contact/linkedin.svg";
import whatsapp from "image/contact/whatsapp.svg";
import gmail from "image/contact/gmail.svg";
import instagram from "image/contact/instagram.svg";

export default function ProfileCard({
    activeNav = "Home",
    setActiveNav = () => { },
    ...props
}) {

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
            image: github,
            link: 'https://github.com/srinivasthedeveloper',
            title: 'github',
        },
        {
            image: linkedin,
            link: 'https://www.linkedin.com/in/srinivasthedeveloper',
            title: 'linkedin',
        },
        {
            image: gmail,
            link: 'mailto:srinivasthedeveloper@gmail.com',
            title: 'gmail',
        },
        {
            image: instagram,
            link: 'https://www.instagram.com/srinivasthedeveloper',
            title: 'instagram',
        },
        {
            image: whatsapp,
            link: 'https://wa.me/+916382589758',
            title: 'whatsapp',
        },

    ]

    return (
        <div className={styles['container']}>
            <div className={styles['profile-container']}>
                <div className={styles['avatar-container']}>
                    <div className={styles['avatar-border']}>
                        <img loading="lazy" src={colorProfile} className={styles['avatar']} alt="" />
                    </div>
                </div>
                <span className={styles['title']}>Srinivas K</span>
            </div>

            <div className={styles['nav-container']}>
                {routes.map((route, index) => (
                    <div
                        key={`right-nav-container-${index}`}
                        className={`${styles['title-container']}`}
                        onClick={() => { setActiveNav(route) }}
                    >
                        <span
                            className={`${styles['title']} ${route === activeNav ? styles['active'] : ''}`}
                        >{route}</span>
                    </div>))}
            </div>

            <div className={styles['contact-container']}>
                {quickLinks.map((item, index) => (<div key={`quick-link-${index}`}>
                    <a href={item.link} onClick={async(e)=>{
                        e.preventDefault();
                        await navigator.clipboard.writeText((item.link).replace('mailto:',''));
                        // setTimeout(()=>{
                            window.open(item.link,"_blank");
                        // },500)
                    }} rel="noreferrer" target="_blank" className={styles['link']}>
                        <img loading="lazy" alt="" title={item.title} src={item.image} className={styles['image']} />
                    </a>
                </div>))}
            </div>
        </div>
    )
}