import Image from 'next/image';
import logo from 'public/sw-logo.png'

import styles from './navigation.module.scss'

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.img}>
        <Image src={logo} alt='logo small' />
      </div>
      <div>
        <ul>
          <li>Leistung</li>
          <li>Über uns</li>
          <li>Karriere</li>
          <li>
            Kontakt
            <svg xmlns="http://www.w3.org/2000/svg" width="36.604" height="25.887" viewBox="0 0 36.604 25.887">
            <g id="Group_10168" data-name="Group 10168" transform="translate(20666 22758.494)">
              <g id="Union_1" data-name="Union 1" transform="translate(-20666 -22758)" fill="none">
                <path d="M17.933,25.393H4a4,4,0,0,1-4-4V4A4,4,0,0,1,4,0H32.6a4,4,0,0,1,4,4V21.393a4,4,0,0,1-4,4Z" stroke="none"/>
                <path d="M 32.60430145263672 23.39260101318359 C 33.70687866210938 23.39260101318359 34.60390090942383 22.49558067321777 34.60390090942383 21.39299964904785 L 34.60390090942383 4.000500679016113 C 34.60390090942383 2.897420406341553 33.70687866210938 2.000000476837158 32.60430145263672 2.000000476837158 L 3.999600410461426 2.000000476837158 C 2.89702033996582 2.000000476837158 2.000000476837158 2.897420406341553 2.000000476837158 4.000500679016113 L 2.000000476837158 21.39299964904785 C 2.000000476837158 22.49558067321777 2.89702033996582 23.39260101318359 3.999600410461426 23.39260101318359 L 32.60430145263672 23.39260101318359 M 32.60430145263672 25.39260101318359 L 3.999600410461426 25.39260101318359 C 1.794600486755371 25.39260101318359 4.547119090148044e-07 23.59799957275391 4.547119090148044e-07 21.39299964904785 L 4.547119090148044e-07 4.000500679016113 C 4.547119090148044e-07 1.794600486755371 1.794600486755371 5.065917889623961e-07 3.999600410461426 5.065917889623961e-07 L 32.60430145263672 5.065917889623961e-07 C 34.80929946899414 5.065917889623961e-07 36.60390090942383 1.794600486755371 36.60390090942383 4.000500679016113 L 36.60390090942383 21.39299964904785 C 36.60390090942383 23.59799957275391 34.80929946899414 25.39260101318359 32.60430145263672 25.39260101318359 Z" stroke="none" fill="#fff"/>
              </g>
              <path id="Path_3823" data-name="Path 3823" d="M-20664.086-22756.773l16.873,14.594" transform="translate(-0.485 -0.311)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
              <path id="Path_3825" data-name="Path 3825" d="M-20647.211-22756.773l-16.873,14.594" transform="translate(16.386 -0.311)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
              <path id="Path_3824" data-name="Path 3824" d="M-20664.086-22729.742l12.545-12.48" transform="translate(-0.485 -3.994)" fill="none" stroke="#fff" stroke-width="2"/>
              <path id="Path_3826" data-name="Path 3826" d="M-20651.541-22729.742l-12.545-12.48" transform="translate(20.716 -3.994)" fill="none" stroke="#fff" stroke-width="2"/>
              </g>
            </svg>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation