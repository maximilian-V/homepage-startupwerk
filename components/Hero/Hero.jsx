import Image from 'next/image'
import logoBig from 'public/sw-logo-big.png'


import styles from './hero.module.scss'


function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.mainContent}>
        <p>Lorum ipsum</p>
        <Image src={logoBig} alt='logo big'/>
        <p>Lorem ipsum dolor sit amet,<br/> consetetur sadipscing elitr, sed</p>
      </div>
      <div className={styles.detailContainer}>
        <div className={styles.iconBox}>
          <svg xmlns="http://www.w3.org/2000/svg" width="43.215" height="43.215" viewBox="0 0 43.215 43.215">
    <g id="Icon_ionic-logo-instagram" data-name="Icon ionic-logo-instagram" transform="translate(-4.5 -4.5)">
      <path id="Path_3815" data-name="Path 3815" d="M35.111,7.1c2.386,0,5.648.945,7.358,2.645s2.645,4.973,2.645,7.358V35.111c0,2.386-.945,5.648-2.645,7.358s-4.973,2.645-7.358,2.645H17.1c-2.386,0-5.648-1.945-7.358-3.645A8.923,8.923,0,0,1,7.1,35.111V17.1c0-2.386.945-5.648,2.645-7.358S14.719,7.1,17.1,7.1H35.111m0-2.6H17.1A12.641,12.641,0,0,0,4.5,17.1V35.111a12.641,12.641,0,0,0,12.6,12.6H35.111a12.641,12.641,0,0,0,12.6-12.6V17.1a12.641,12.641,0,0,0-12.6-12.6Z" fill="#fff"/>
      <path id="Path_3816" data-name="Path 3816" d="M26.326,14.4a2.7,2.7,0,1,1,2.7-2.7A2.694,2.694,0,0,1,26.326,14.4Z" transform="translate(11.486 2.702)" fill="#fff"/>
      <path id="Path_3817" data-name="Path 3817" d="M22.054,14.851a7.2,7.2,0,1,1-7.2,7.2,7.209,7.209,0,0,1,7.2-7.2m0-3.6a10.8,10.8,0,1,0,10.8,10.8,10.806,10.806,0,0,0-10.8-10.8Z" transform="translate(4.054 4.054)" fill="#fff"/>
    </g>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="44.215" height="42.104" viewBox="0 0 44.215 42.104">
          <g id="Icon_feather-linkedin" data-name="Icon feather-linkedin" transform="translate(-2 -2)">
            <path id="Path_3818" data-name="Path 3818" d="M27.664,12A12.664,12.664,0,0,1,40.329,24.664V39.44H31.886V24.664a4.221,4.221,0,1,0-8.443,0V39.44H15V24.664A12.664,12.664,0,0,1,27.664,12Z" transform="translate(4.886 3.664)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            <path id="Path_3819" data-name="Path 3819" d="M3,13.5h8.443V38.829H3Z" transform="translate(0 4.275)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            <path id="Path_3820" data-name="Path 3820" d="M11.443,7.221A4.221,4.221,0,1,1,7.221,3a4.221,4.221,0,0,1,4.221,4.221Z" transform="translate(0)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          </g>
          </svg>
        </div>
        <div className={styles.scrollLine}>
          <p>SCROLL</p>
          <div></div>
        </div>
      </div>
    </section>
  )
}

export default Hero