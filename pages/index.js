import Head from 'next/head'
import Footer from '../components/footer.js'
import styles from '../styles/Home.module.css'
import { PopupWidget } from 'react-calendly'

export default function Home() {
  return (
    <div className={styles.container}>
      <PopupWidget
            color="#BAA0BA"
            pageSettings={{
              backgroundColor: 'ffffff',
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: 'A17DA1',
              textColor: '4d5055'
            }}
            text="Wanna Chat?"
            textColor="#ffffff"
            url="https://calendly.com/ctfries/in16kwtdy5"
          />
      <Head>
        <title>Chris Fries | Solutions Architech | Javascript Developer | Tech Manager | Geek </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <h1>Hi, I'm Chris</h1>
       <div>
        <h3>(professionally) I am:</h3>
       <ul>
         <li>An AWS Solutions Architech</li>
         <li>Javascript Developer</li>
         <li>Legacy ColdFusion Maintainer(send help)</li>
         <li>Occasionally Desktop/Endpoint Support</li>
         <li>AD/O365 maintainer</li>
         <li>Progect Manager & Tech Manager</li>
       </ul>
       <h3>I'm also:</h3>
       <ul>
         <li>Student(WGU NightOwls!)</li>
         <li>Husband</li>
         <li>Homelabber</li>
         <li>Hardware Geek</li>
         <li>Gamer</li>
       </ul>
       </div>
      </main>

      <Footer />
    </div>
  )
}
