import Image from 'next/image'

import logo from 'public/sw-logo.png'

import styles from './footer.module.scss'


function Footer() {
  return (
    <footer className={styles.wrapper}>
        <div>
            <Image src={logo} alt='logo of startupwerk'/>
            <p>Impressum</p>
            <p>Datenschutzerklärung</p>
            <p>© StartupWerk, 2023</p>
        </div>
        <div className={styles.contentRight}>
            <div>
                <p>Menü</p>
                <p>Erfolgsgeschichte</p>
                <p>Über uns</p>
                <p>Karriere</p>
                <p>Leistungen</p>
            </div>
            <div>
                <p>Kontakt</p>
                <p>Duisburger Straße 375<br/>Oberhausen</p>
            </div>
                <p>Links</p>
                <div>
                    
                </div>
            <div>

            </div>
        </div>
    </footer>
  )
}

export default Footer