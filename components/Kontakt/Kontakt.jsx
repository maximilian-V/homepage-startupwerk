'use client'

import Image from "next/image"

import absoluteBlob from 'public/right-blob.png'
import contactImage from 'public/contact-image.png'
import Button from "../reusableComponents/Button"

import styles from './kontakt.module.scss'

/* import useWindowDimensions from "../functionalComponents/GetWindowDimensions" */

function Kontakt() {

    /* const {screenWidth, screenHeight} = useWindowDimensions(); */



  return (
    <>
    <div>
        {/* { screenWidth >= 1024 &&  */}
        <section className={styles.wrapper}>
            <div>
            </div>
            <div className={styles.leftSection}>
                <Image className={styles.blob} src={absoluteBlob} height={1001} alt='logo blob'/>
                <div className={styles.imageWithText}>
                    <Image 
                    src={contactImage} 
                    height={526} 
                    className={styles.contactImage}
                    alt='image of your contact person'/> 
                    <div className={styles.textOverImage}>
                        <p>
                        Julian Blohm<br/>
                        Projektleitung<br/>
                        </p>
                        <p>
                        julian@startup-werk.de<br/>
                        015712345678<br/>
                        </p>
                        <p>
                            StartupWerk<br/>
                            StartupWerk
                        </p>
                    </div>
                    
                </div>
            </div>
            <div className={styles.rightSection}>
                <h2>Eure Herausforderung -<br/> unser Element</h2>
                <p>Ruft uns an, schreibt eine Mail oder vereinbart direkt einen Termin. Gemeinsam beginnen/starten/beleben/investieren/wahren wir in eure digitale Zukunft. </p>
                <Button buttonText={'Beratungstermin vereinbaren'}/>
            </div>
        </section>
        {/* } */}
    </div>
    {/* <div>
    { screenWidth <= 1024 && 
        <section className={styles.wrapper}>
            <h2>Eure Herausforderung -<br/> unser Element</h2>
            <div className={styles.contentContainer}>
                <div>
                    <div className={styles.imageContainer}>
                        <Image 
                        src={contactImage} 
                        height={526} 
                        className={styles.contactImage}
                        alt='image of your contact person'/>
                        <div>
                            <p>
                            Julian Blohm<br/>
                            Projektleitung<br/>
                            </p>
                            <p>
                            julian@startup-werk.de<br/>
                            015712345678<br/>
                            </p>
                            <p>
                                StartupWerk<br/>
                                StartupWerk
                            </p>
                        </div>
                        
                    </div>
                </div>
                <div>
                    <p>Ruft uns an, schreibt eine Mail oder vereinbart direkt einen Termin. Gemeinsan starten wir in eure digitale Zukunft. </p>
                </div>
            </div>
        </section>}
    </div> */}
</>

  )
}

export default Kontakt