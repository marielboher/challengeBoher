import React from "react";
import styles from "../styles/about.module.css";
import imgAbout from "../public/about.svg";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image src={imgAbout} alt="profile" className={styles.img} />
        </div>
        <div className={styles.text}>
          <h1>ABOUT ME</h1>
          <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, veniam!</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quae amet aspernatur consequatur aliquam tempore alias facere ut ullam quibusdam cum temporibus voluptatem modi est saepe, assumenda ea iste commodi incidunt voluptatibus porro dolorum? Dolores cupiditate error eligendi illum? Blanditiis suscipit quisquam reiciendis ipsam maxime soluta aliquam atque doloremque aut perspiciatis quod tenetur voluptatum iure perferendis nam recusandae assumenda impedit nostrum, velit at mollitia ducimus nisi fuga! Temporibus eveniet alias magnam facere unde sunt officia. Numquam repellat voluptatibus accusamus rem!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
