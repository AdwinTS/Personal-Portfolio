import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Adwin T Sunil</h1>
        <p className={styles.description}>
          I'm a full-stack developer with nice experience using React,Next and
          Node.js. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:adwintsunil8@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/adwin t sunil 01 (1)a.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
