import Image from 'next/image'
import styles from './page.module.scss'

import Hero from '@/components/Hero/Hero'
import Navigation from '@/components/Navigation/Navigation'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.sectionOneTwoBackgrounds}>
        <Navigation />
        <Hero />
      </div>
      
    </main>
  )
}
