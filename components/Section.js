import styles from '<import>/styles/Home.module.css'
import Image from 'next/image'

export default function Section() {
  return (
    <section className={styles.intro} id="Home">
      <p className={styles.p1element}>Hi, my name is</p>
      <p className={styles.p2element}>Amrit Pandey</p>
      <p className={styles.p3element}>I build things for the web.</p>
      <p className={styles.p4element}>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on  building accessible, human-centered products at my <a href="https://github.com/amripandey" target="_blank">Github</a>.</p>
      <div className={styles.ResumeBox}>Resume</div>
      <div className={styles.About}>
        <h2>01.<p className={styles.p5element}> About Me----------------------</p></h2>
        <p className={styles.p6element}>Hello! My name is Amrit pandey and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom portfolio themes — turns grtting know about web and taught me a lot about HTML & CSS!
          Fast-forward to today, and I’ve had the privilege of working on different types  of open-source projects, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences for a variety of projects.</p>
      </div>
    </section>
  )
}
