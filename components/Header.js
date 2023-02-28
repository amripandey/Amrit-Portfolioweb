import styles from '<import>/styles/Home.module.css'

export default function Header() {
    return (
        <header className={styles.nav}>
                <div className={styles.logo}>Amrit.</div>
                <ul>
                <li>01. <a href="#About">About</a> </li>
                <li>02. <a href="#Experience">Experience</a> </li>
                <li>03. <a href="#Work">Work</a> </li>
                <li>04. <a href="#Contact">Contact</a> </li>
                <div className={styles.Resume} href="#">Resume</div>
                </ul>
        </header>
    )
}
