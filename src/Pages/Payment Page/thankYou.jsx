import React from 'react'
import styles from "./thankyou.module.css"
import {Navigate} from "react-router-dom"
import success from "./success.gif"
import { useNavigate } from "react-router-dom";
const PaymentConfirm = () => {
const navigate=useNavigate();

  return (
    <div>
       <>
  <div id={styles.imgcont}>
    {/* <img src="https://rb.gy/ueupm" alt="success" /> */}
    <img src={success} alt="success" />


  
  </div>
  <div className={styles.firework} id={styles.firework1}>
    <div className={styles.explosion} />
    <div className={styles.explosion} />
    <div className={styles.explosion} />
    <div className={styles.explosion} />
    <div className={styles.explosion} />
    <div className={styles.explosion} />
    <div className={styles.explosion} />
    <div className={styles.explosion} />
    <div className={styles.explosion} />
    <div className={styles.explosion} />
    <div className={styles.explosion} />
    <div className={styles.explosion} />
   
  </div>
  <div className={styles.firework} id={styles.firework2}>
  <div className={styles.explosion} />
  <div className={styles.explosion} />
  <div className={styles.explosion} />
  <div className={styles.explosion} />
  <div className={styles.explosion} />
  <div className={styles.explosion} />
  <div className={styles.explosion} />
  <div className={styles.explosion} />
  <div className={styles.explosion} />
  <div className={styles.explosion} />
  <div className={styles.explosion} />
  <div className={styles.explosion} />
  </div>
  <div className={styles.firework} id={styles.firework3}>
  <div className={styles.explosion} />
  <div className={styles.explosion} />
  <div className={styles.explosion} />
  <div className={styles.explosion} />
  <div className={styles.explosion} />
  <div className={styles.explosion} />
  <div className={styles.explosion} />
  <div className={styles.explosion} />
  <div className={styles.explosion} />
  <div className={styles.explosion} />
  <div className={styles.explosion} />
  <div className={styles.explosion} />
  </div>
  <h2 id='h2'>
    Thank You <span id={styles.username} /> for booking
  </h2>
  {  setTimeout(()=>{
   return navigate("/");
  },3000)}
</>
    </div>
      )
}

export default PaymentConfirm