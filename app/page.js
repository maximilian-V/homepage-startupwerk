import Image from 'next/image'
import styles from './page.module.scss'

import Hero from '@/components/Hero/Hero'
import Navigation from '@/components/Navigation/Navigation'
import BelowFold from '@/components/BelowFold/BelowFold.jsx'
import Herausforderungn from '@/components/Herausforderungen/Herausforderungn'
import Erfolgsgeschichte from '@/components/Erfolgsgeschichte/Erfolgsgeschichte'
import KreativeKoepfe from '@/components/KreativeKoepfe/KreativeKoepfe'
import Kontakt from '@/components/Kontakt/Kontakt'
import Footer from '@/components/Footer/Footer'


import useWindowDimensions from '@/components/functionalComponents/GetWindowDimensions'


export default function Home() {


  return (
    <main className={styles.main}>
        <Navigation />
        <div className={styles.sectionOneTwoBackgrounds}>
          <Hero />
          <BelowFold />
        </div>
          <Herausforderungn />
          <Erfolgsgeschichte />
          <KreativeKoepfe />
          <Kontakt />
          <Footer />
          
    </main>
  )
}
