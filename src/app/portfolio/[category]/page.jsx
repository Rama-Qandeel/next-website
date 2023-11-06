import React from "react";
import { items } from "./data.js";
import styles from "./page.module.css";
import Image from "next/image";


const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>title</h1>
          <p className={styles.desc}>desc</p>
          <button>See More</button>
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
