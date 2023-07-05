
"use client"
import React from 'react'
import styles from "./page.module.css"
import {useState, useEffect} from "react"
import { useSession } from 'next-auth/react'


const Dashboard = () => {

  const [data, setData]=useState([]);

  // fetch our data on the client side using seEffect
  useEffect(()=>{

const getData=async()=>{

  const res=await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(res)

  if(!res.ok) return notFound();

  // else we want to get our data back
  const data =await res.json()
  setData(data);
}

getData();

  },[])

  console.log(data)
const session=useSession()
console.log(session);

  return (
    <div className={styles.container}>Dashboard</div>
  )
}

export default Dashboard