import React from 'react'
import styles from "./page.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Rama. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt="img Facebook Account" />
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="img" />
        {/* add fill = {true} or add width/height to img */}
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="img" />
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="img" />
      </div>
    </div>
  )
}

export default Footer
