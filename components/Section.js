import styles from '<import>/styles/Home.module.css'

export default function Section() {
  return (
    <section className={styles.intro} id = "About">
      <p className={styles.p1element}>Hi, my name is</p>
      <p className={styles.p2element}>Amrit Pandey</p>
      <p className={styles.p3element}>I build things for the web.</p>
      <p className={styles.p4element}>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on  building accessible, human-centered products at my <a href="https://github.com/amripandey" target="_blank">Github</a>.</p>
    </section>
  )
}
