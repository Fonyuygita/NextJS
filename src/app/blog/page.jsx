import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Blog = () => {
  return (
    <div className={styles.maincontainer}>
    <Link href="/blog/:id" className={styles.Blog}>
    
    <div className={styles.imgContainer}>
    <Image src="https://images.pexels.com/photos/5184951/pexels-photo-5184951.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="blog" width="400" height="250" className={styles.image} />
    
    </div>
    <div className={styles.content}>
    <h1 className={styles.title}>first vlog</h1>
    <p className={styles.desc}>welcome to my blog page</p>
    
    </div>
    
    </Link>
    
    </div>
  )
}

export default Blog