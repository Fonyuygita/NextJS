import Button from '@/component/button/Button'
import Image from 'next/image'
import React from 'react'
import styles from "./page.module.css"

const Category = ({params}) => {
  return (
    <div className={styles.container}>
    <h1 className={styles.container}>{params.category}</h1>

    <div className={styles.item}>
    
    <div className={styles.content}>
    <h1 className={styles.title}>welcome here</h1>
    <p className={styles.desc}>Desc</p>
    <Button text="See More" url="#"/>
    
    </div>
    <div className={styles.imgContainer}>
    <Image fill={true} className={styles.img}  src="https://images.pexels.com/photos/6256258/pexels-photo-6256258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='cat'/>
    
   </div>
    
    </div>
      
    </div>
  )
}

export default Category 
