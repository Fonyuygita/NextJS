import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Button from '@/component/button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600' fill={true} alt='lol' className={styles.img} />

        <div className={styles.imageText}>
          <h1 className={styles.imageTitle}>Students Story</h1>
          <h2 className={styles.imageDesc}>Students who have benifited</h2>

        </div>
      </div>


      <div className={styles.textContainer}>
      <div className={styles.item}>
      <h1 className={styles.title}>Who are We?</h1>
      <p className={styles.desc}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia rem ut et dolorum rerum nam aut assumenda neque deserunt eum, illo cumque velit, 
      
      <br/>
      
      repudiandae commodi quia ullam ad quam soluta. Porro vitae quia minus, in quae asperiores possimus inventore voluptate ad cum nisi? Distinctio, earum.

      <br/>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, nemo quaerat omnis ex quia voluptatum minus a architecto perferendis, sit soluta ut officiis.
      </p>

      </div>

<div className={styles.item}>

<h1 className={styles.titl}>What We Do</h1>
<p>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere voluptate deleniti dolor rerum aliquid cumque voluptas fugit qui iste, nulla deserunt laboriosam molestiae expedita! Aliquid, alias possimus sit voluptate corporis dolorem nesciunt? Impedit veritatis possimus aspernatur laborum in fuga aut nemo, quas, illum qui explicabo iusto voluptatum exercitationem cum dicta earum maxime 
<br/>

<br/> - sapiente eveniet - incidunt? Nobis doloremque - facilis in possimus iusto
</p>

<Button text="Contacte" url="/portfolio"/>



</div>

      </div>

    </div>
  )
}

export default About