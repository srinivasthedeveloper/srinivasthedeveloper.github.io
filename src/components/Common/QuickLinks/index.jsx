import styles from "./styles.module.scss";
import github from "assets/image/contact/github.svg";
import linkedin from "assets/image/contact/linkedin.svg";
import whatsapp from "assets/image/contact/whatsapp.svg";
import gmail from "assets/image/contact/gmail.svg";
import instagram from "assets/image/contact/instagram.svg";

export default function QuickLinks() {

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
            link: 'mailto:srinivasthedeveloper@gmail.com?subject=Greetings Developer!&body=I\'ve came across your portfolio and found that interesting and I would like to have a word about, {YOUR_MESSAGE}',
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

    ];

    return (
        <div className={styles['contact-container']}>
            {quickLinks.map((item, index) => (<div key={`quick-link-${index}`}>
                <a href={item.link} title={item.title} onClick={async (e) => {
                    e.preventDefault();
                    await navigator.clipboard.writeText((item.link.split('?')[0]).replace('mailto:', ''));
                    // setTimeout(()=>{
                    window.open(item.link, "_blank");
                    // },500)
                }} rel="noreferrer" target="_blank" className={styles['link']}>
                    <img loading="lazy" alt={item.title} title={item.title} src={item.image} className={styles['image']} width="30px" height="30px" />
                </a>
            </div>))}
        </div>
    )
}