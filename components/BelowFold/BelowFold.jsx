import Image from "next/image"
import officeImage from 'public/right-image.png'
import blob from 'public/blob-small.png'

import styles from './belowFold.module.scss'

function BelowFold() {
  return (
    <section className={styles.sectionWrapper}> 
        <div>
            <h2>Eure Vision - Unser Fokus</h2>
            <div className={styles.contentContainer}>
                <div className={styles.textContainer}>
                  <p>
                  Ob kleine oder große Kunden spielt bei uns keine Rolle. Eure Website braucht einen Experten, eure Prozesse sollen intuitiver werden, eure Kreativität macht vor dem Tellerrand stopp? Als Partner unterstützen wir Start-ups, Mittelstand und Großunternehmen auf allen Wegen der Digitalisierung. Individualsoftware, Prozessdigitalisierung, Webentwicklung, UI/UX Design und Marketing – alles unter einem Dach.
                  </p>
                </div>
                <div className={styles.imageContainer}>
                    <Image 
                    src={officeImage}
                    alt='office room with sight over the city' 
                    className={styles.officeImage}/>
                    <Image 
                    src={blob} alt='logo element for styling' className={styles.blob}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BelowFold