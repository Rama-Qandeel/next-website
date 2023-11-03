import React from "react";
import { links } from "@/constant";
import Link from "next/link";
import styles from "./page.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Rama
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button className={styles.logout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
