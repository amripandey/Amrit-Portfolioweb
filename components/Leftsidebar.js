import styles from '<import>/styles/Home.module.css'

import { VscGithubAlt } from "react-icons/vsc";
import { IoLogoTwitter,
    IoLogoFacebook,
    IoLogoLinkedin
} from "react-icons/io5";

export default function Leftsidebar() {
  return (
    <nav className={styles.container}>
        <ul>
            <li>< VscGithubAlt /></li>
            <li><IoLogoLinkedin /></li>
            <li><IoLogoFacebook /></li>
            <li><IoLogoTwitter /></li>
        </ul>
    </nav>
  )
}
