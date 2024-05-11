import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Hiral</h1>
        <p className={styles.description}>
          👋 Hey there! I'm Hiral Barot, a full stack developer from Canada. I'm
          passionate about creating high-impact digital experiences. With
          expertise in both front-end and back-end development, I bring a
          holistic approach to every project. Let's collaborate and bring your
          ideas to life!
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      {/* <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      /> */}
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
