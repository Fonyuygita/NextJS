import React from 'react'
import styles from "./footer.module.css"
import Image from "next/image"
const Footer = () => {
  return (
    <div className={styles.container}>
    <div>@2023 fonyuygita@gmail.com</div>
    <div className={styles.socials}>
    
<Image  src="/1.png" width={15} height={15} className={styles.icons} alt="gita"/>
<Image  src="/2.png" width={15} height={15} className={styles.icons} alt="gita"/>
<Image  src="/3.png" width={15} height={15} className={styles.icons} alt="gita"/>
<Image  src="/4.png" width={25} height={20} className={styles.icons} alt="gita"/>


    </div>
    </div>
  )
}

export default Footer