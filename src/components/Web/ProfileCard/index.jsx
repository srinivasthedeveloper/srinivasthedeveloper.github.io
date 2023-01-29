import styles from "./styles.module.scss";
import github from "assets/image/contact/github.svg";
import linkedin from "assets/image/contact/linkedin.svg";
import whatsapp from "assets/image/contact/whatsapp.svg";
import gmail from "assets/image/contact/gmail.svg";
import instagram from "assets/image/contact/instagram.svg";
import ProfileAvatar from "components/Common/ProfileAvatar";
import QuickLinks from "components/Common/QuickLinks";

export default function ProfileCard({
    activeNav = "Home",
    setActiveNav = () => { },
    ...props
}) {

    const routes = [
        'Home',
        'About',
        'Work',
        'Resume',
        // 'Portfolio',
        // 'Projects',
        'Contact',
    ]

    return (
        <div className={styles['container']}>
            <ProfileAvatar />
            
            <div className={styles['nav-container']}>
                {routes.map((route, index) => (
                    <div
                        key={`right-nav-container-${index}`}
                        className={`${styles['title-container']}`}
                        onClick={() => {
                            document.getElementById((route.toLocaleLowerCase())+"-view").scrollIntoView();
                            setActiveNav(route);
                        }}
                    >
                        <span
                            className={`${styles['title']} ${route === activeNav ? styles['active'] : ''}`}
                        >{route}</span>
                    </div>))}
            </div>
            <QuickLinks />
        </div>
    )
}