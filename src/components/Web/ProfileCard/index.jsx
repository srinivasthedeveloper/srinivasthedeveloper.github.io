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
                        className={`${styles['title-container']} event-track`}
                        data-event_data={JSON.stringify({ name: route + "-click", data: { activeNav } })}
                        onClick={(element) => {
                            document.getElementById((route.toLocaleLowerCase()) + "-view").scrollIntoView();
                            randomiseCharactersEffect(element, route);
                            // setActiveNav(route);
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

    function randomiseCharactersEffect(element = null, originalName) {
        console.log(element.target.innerText ,  originalName);
        if (element) {
            // const alphabets = ['䷀', '䷁', '䷂', '䷃', '䷄', '䷅', '䷆', '䷇', '䷈', '䷉', '䷊', '䷋', '䷌', '䷍', '䷎', '䷏', '䷐', '䷑', '䷒', '䷓', '䷔', '䷕', '䷖', '䷗', '䷘', '䷙'];
            const alphabets = "abcdefghijklmnopqrstuvwxyz".split('');
            let iterator = 0;
            let interval=null;
            clearInterval(interval);
            if(!interval){
                interval = setInterval(() => {
                    element.target.innerText = originalName.split('').map((char,index) => index<iterator ? char : alphabets[Math.ceil(Math.random() * 26)]).join('');
                    iterator += 1/5;
                    if (iterator > originalName.length && interval) {
                        clearInterval(interval);
                        interval=null;
                        element.target.innerText = originalName;
                    }
                }, 30)
            }
        }
    }
}