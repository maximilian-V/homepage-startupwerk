import Image from "next/image"
import firstImage from 'public/heraus_01.png'

import styles from './herausforderungen.module.scss'

function Herausforderungn() {
  return (
    <section className={styles.wrapper}>
        <div>
            <h2>Herausforderungen</h2>
        </div>
        <div className={styles.firstRow}>
            <div className={styles.imageContainer}>
                <div className={styles.backgroundDiv}></div>
                <Image src={firstImage} width={420} alt='image of an office'/>
                <p>Individualsoftware</p>
            </div>
            <div className={styles.imageContainer}>
                <div className={styles.backgroundDiv}></div>
                <Image src={firstImage} width={420} alt='image of an office'/>
                <p>Prozessoptimierung</p>
            </div>
            <div className={styles.imageContainer}>
                <div className={styles.backgroundDiv}></div>
                <Image src={firstImage} width={420} alt='image of an office'/>
                <p>Webentwicklung</p>
            </div>
        </div>
        <div className={styles.secondRow}>
            <div className={styles.imageContainer}>
                <div className={styles.backgroundDiv}></div>
                <Image src={firstImage} width={420} alt='image of an office'/>
                <p>Marketing</p>
            </div>
            <div className={styles.imageContainer}>
                <div className={styles.backgroundDiv}></div>
                <Image src={firstImage} width={420} alt='image of an office'/>
                <p>Design</p>
            </div>
        </div>
    </section>
  )
}

export default Herausforderungn