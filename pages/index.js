import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '<import>/styles/Home.module.css'
import Section from '<import>/components/Section'
import Header from '<import>/components/Header'
import Leftsidebar from '<import>/components/Leftsidebar'


export default function Home() {
  return (
    <>
      <Head>
        <title>Amrit Pandey</title>
        <meta name="description" content="My portfolio website created" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <main className={styles.grid}>
        <Header />
        <Leftsidebar />
        <Section />
      </main>
    </>
  )
}
