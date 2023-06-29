import React from 'react'
import styles from './page.module.css'
import Button from '@/component/button/Button'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className={styles.contact}>
    <h1 className={styles.title}>{`Let's keep in touch`}</h1>
  <div className={styles.content}>
  
  <div className={styles.imgContainer}>
  <Image src="/contact.png" fill={true} alt="my image" className={styles.image}/>
  
  </div>

  <form className={styles.form}>
    
<input type="text" placeholder="name" className={styles.input}/>
<input type="text" placeholder='email' className={styles.input} />
<textarea name="" id="" cols="30" rows="10" className={styles.textArea} placeholder='message'></textarea>
  <Button url="#" text="Send"/>
  </form>

  </div>
  
    
    </div>
  )
}

export default Contact