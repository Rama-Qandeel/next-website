import React from "react";
import styles from "./page.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.left}>
        <header className={styles.header}>
          My <span>Details</span> & <span>Contact Information</span>
        </header>
        <div className={styles.contact_details}>
          <span className={styles.span}>(+962) 799137234</span>
        </div>
        <div className={styles.contact_details}>
          <span className={styles.span}>Jordan / Amman</span>
        </div>
        <div className={styles.contact_details}>
          <span className={styles.span}>rama.qndeel@gmail.com</span>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <form className={styles.form}>
            <input
              type="text"
              placeholder="FisrtName"
              className={styles.input}
            />
            <input
              type="text"
              placeholder="LastName"
              className={styles.input}
            />
            <input type="email" placeholder="Email" className={styles.input} />
            <input type="text" placeholder="Subject" className={styles.input} />
            <textarea
              placeholder="Message"
              className={styles.textarea}
            ></textarea>
            <button className={styles.button}>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
