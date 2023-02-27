import Image from "next/image"
import clientImage from 'public/marc-aurel.png'
import absoluteBlob from 'public/right-blob.png'
import Button from "../reusableComponents/Button"

import styles from './erfolgsgeschichte.module.scss'

function Erfolgsgeschichte() {
  return (
    <section className={styles.wrapper}>
        <div className={styles.leftSide}>
            <h2>Erfolgsgeschichte: <span>Wie unser Partner Linkvertise dank unserer technischen Affinität und Expertise zu einem marktführenden Unternehmen geworden ist. </span></h2>  
            <p>Von Konzeption, Planung und Projektmanagement über Webentwicklung bis hin zu einer Individualsoftware – so haben wir gemeinsam die Herausforderungen von Linkvertise gemeistert und zielorientiert aus einer Vision, Realität gemacht.</p>
            <div className={styles.numberWrapper}>
                <div>
                    <h2>12</h2>
                    <h2>Mitarbeiter</h2>
                </div>
                <div>
                    <h2>15 User</h2>
                    <h2>Mitarbeiter</h2>
                </div>
                <div>
                    <h2>20 Mio</h2>
                    <h2>Umsatz</h2>
                </div>
            </div>
            <Button buttonText={'Whole Story'} />
        </div>
        <div className={styles.rightSide}>
            <Image src={absoluteBlob} className={styles.absoluteBlob} alt='background graphic in logo style' />
            <Image src={clientImage} alt='image of the client' className={styles.clientImage} />
            <div>
                <p>„Vom Hobby zum Geschäftsmodell dank StartupWerk – Gemeinsam haben wir eine Individualsoftware für Linkvertise entwickelt.“<br/><span>Marc Aurel Winter</span></p>
            </div>
        </div>
    </section>
  )
}

export default Erfolgsgeschichte