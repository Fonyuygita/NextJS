import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Link from 'next/link'



const fetchData=async()=>{
// fetch data here

const res=await fetch("https://jsonplaceholder.typicode.com/posts")

// check for possible errors before returning data
if(!res.ok){
  return notFound();
}

return res.json();
}

const Blog = async () => {
// how to get the data here and use
const data=await fetchData();
console.log(data);

  return (


    <div className={styles.maincontainer}>
    {data.map((item)=>{
        <Link href="/blog/:id" className={styles.Blog} key={item.id}>
    
    <div className={styles.imgContainer}>
    <Image src="https://images.pexels.com/photos/5184951/pexels-photo-5184951.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="blog" width="400" height="250" fill={true} className={styles.image} />
    
    </div>
    <div className={styles.content}>
    <h1 className={styles.title}>{item.title}</h1>
    <p className={styles.desc}>{item.body}</p>
</div>
</Link>
    })}
    </div>
    )}

    export default Blog