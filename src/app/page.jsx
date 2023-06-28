// import Image from 'next/image'
import styles from './page.module.css'
import React from 'react'
import Hero from 'public/hero.png'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
    <div className={styles.item}>
    <h1 className={styles.title}>
    Better Education For All
    </h1>
<p className={styles.desc}>
Sharing your ideas with great minds to turn them to reality. Together we will learn, share and  grow.
</p>
<button className={styles.button}>See Details</button>

    </div>

    <div className={styles.item}>
    
    <Image src={Hero} alt='gita home'  />
    
    </div>
    
    </div>
  )
}


