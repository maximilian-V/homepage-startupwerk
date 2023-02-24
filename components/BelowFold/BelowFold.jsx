import Image from "next/image"
import officeImage from 'public/right-image.png'
import blob from 'public/blob-small.png'

import styles from './belowFold.module.scss'

function BelowFold() {
  return (
    <section className={styles.sectionWrapper}> 
        <div>
            <h2>So exklusiv wie ihr - so kreativ<br /> sind wir</h2>
            <div className={styles.contentContainer}>
                <p>
                Ob kleine oder große Kunden spielt bei uns keine Rolle. Eure Website braucht einen Experten, eure Prozesse sollen intuitiver werden, eure Kreativität macht vor dem Tellerrand stopp? Als Partner unterstützen wir Start-ups, Mittelstand und Großunternehmen auf allen Wegen der Digitalisierung. Individualsoftware, Prozessdigitalisierung, Webentwicklung, UI/UX Design und Marketing – alles unter einem Dach.  
                </p>
                <div>
                    <Image src={officeImage} alt='office room with sight over the city' />
                    <Image src={blob} alt='logo element for styling' className={styles.absoluteBlob}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BelowFold