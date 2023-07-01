import Image from 'next/image'
import React from 'react'
import styles from "./page.module.css"

const BlogPost = () => {
  return (
    <div className={styles.container}>
    <div className={styles.top}>
    <div className={styles.info}>
    
    <h1 className={styles.title}>Welcome and read the blog</h1>

    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iste architecto ex voluptatem ipsa, necessitatibus vitae asperiores a tenetur perferendis ea soluta beatae, accusamus ut pariatur error officia illo, alias suscipit repudiandae sunt ducimus accusantium? Sapiente est fugiat porro totam.</p>

    <div className={styles.author}>
    
    <Image src="" width={48} height={48} className={styles.avatar} />
    <span className={styles.username}>Fonyuy Jude</span>
    </div>
<Image src="https://images.pexels.com/photos/5184951/pexels-photo-5184951.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="image"  className={styles.image} height={300} width={300}/>

    </div>
    
    </div>

    <div className={styles.content}>
    
    <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugit quasi at obcaecati animi minima laudantium, ratione molestias nisi asperiores, et pariatur repellendus ab libero ducimus vero corporis ullam, perferendis eum. Non, fugiat cupiditate!
     <br/>
    Neque rem obcaecati expedita adipisci, animi ipsa harum exercitationem explicabo ut saepe. Quis omnis fugiat voluptatibus facilis illo quasi, pariatur cum nobis vel, qui tempora a!</p>
    </div>
    
    </div>
  )
}

export default BlogPost