import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vidit Kanchan</h1>
        <p className={styles.description}>
        I am a final-year B.Tech student specializing in Computer Science and Engineering, with a passion for software development and technology innovation. I am particularly interested in areas like artificial intelligence, software development, and web development.</p>
        <a href="mailto:viditkanchan26@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <br />
        <a href="https://drive.google.com/file/d/1qodgVWasfUMOni07_1oyu9QNuSDzXoei/view?usp=drive_link" className={styles.contactBtn}>
          Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/back.png")}
        alt="Vidit Kanchan"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
