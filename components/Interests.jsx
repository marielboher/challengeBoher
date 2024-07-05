import React from "react";
import styles from "../styles/interests.module.css";
import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { FaCircleNodes } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";

const Interests = () => {
  return (
    <div className={styles.interest}>
      <h2>My Interests</h2>
      <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi earum ab exercitationem provident quidem vitae aperiam, repellendus dicta vero reprehenderit quos distinctio sit. Repudiandae inventore tempore soluta tempora. Ex voluptatem, fugit, provident at impedit cumque quae illum nostrum tenetur aut, ullam dolore doloremque repudiandae pariatur dignissimos. Repellat voluptatum beatae amet?</p>
      <ul className={styles.list}>
        <li>
          <div className={styles.card}>
            <FaReact className={styles.icon} />
            <h4>React</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              voluptates?
            </p>
          </div>
        </li>
        <li>
          <div className={styles.card}>
            <FaHtml5 className={styles.icon} />
            <h4>HTML</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              voluptates?
            </p>
          </div>
        </li>
        <li>
          <div className={styles.card}>
            <RiNextjsLine className={styles.icon} />
            <h4>Next.js</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              voluptates?
            </p>
          </div>
        </li>
        <li>
          <div className={styles.card}>
            <FaCircleNodes className={styles.icon} />
            <h4>Node.js</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              voluptates?
            </p>
          </div>
        </li>
        <li>
          <div className={styles.card}>
            <FaCss3Alt className={styles.icon} />
            <h4>CSS</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              voluptates?
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Interests;
