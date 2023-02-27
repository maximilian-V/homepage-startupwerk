import Image from 'next/image'
import officeImage from 'public/office_image.png'

import styles from './kreativeKoepfe.module.scss'

function KreativeKoepfe() {
  return (
    <section className={styles.wrapper}>
        <h2>Unsere kreativen Köpfe</h2>
        <div className={styles.flexContainer}>
            <div className={styles.imageContainer}>
                <div className={styles.backgroundDiv}></div>
                <Image src={officeImage} alt='image of an office'/>
            </div> 
            <div className={styles.textContainer}>
                <div>
                    <h2>Schöpfer</h2>
                    <p>einer digitalen Welt</p>
                </div>
                <div>
                    <h2>Verfasser</h2>
                    <p>einer digitalen Welt</p>
                </div>
                <div>
                    <h2>Konzeptionisten</h2>
                    <p>einer digitalen Welt</p>
                </div>
                <div>
                    <h2>Planer</h2>
                    <p>einer digitalen Welt</p>
                </div>
                <div>
                    <h2>Koordinatoren</h2>
                    <p>einer digitalen Welt</p>
                </div>
            </div>
        </div>
        <p>Eure Vorstellung – unsere Expertise. Ein starkes Projekt startet mit einem starken Team: Gemeinsam treiben wir die digitale Innovationskultur eures Unternehmens voran.  
        Kreative Persönlichkeiten mit ausgeprägter technischer Expertise beraten, konzeptionieren, begleiten und sensibilisieren euch auf dem Weg in die digitale Zukunft. Ihr habt eine Vision? Wir haben ein Ziel</p>
    </section>
  )
}

export default KreativeKoepfe