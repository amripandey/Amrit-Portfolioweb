import styles from '<import>/styles/Home.module.css'
import Link from 'next/link'

export default function Header() {
    return (
        <header className={styles.nav}>
            <div className={styles.logo}>Amrit.</div>
            <ul>
                <li>01. <Link href="#About">About</Link> </li>
                <li>02. <a href="#Experience">Experience</a> </li>
                <li>03. <a href="#Work">Work</a> </li>
                <li>04. <a href="#Contact">Contact</a> </li>
                <a className={styles.Resume} href="/cv.pdf" targer="_blank" rel="noopener noreferrer">Resume</a>
            </ul>
        </header>
    )
}
