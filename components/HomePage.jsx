import React from 'react'
import Image from 'next/image';
import styles from "../styles/home.module.css"
import profilePic from '../public/pic.svg';

const HomePage = () => {
  return (
    <div>
        <div className={styles.container}>
           <div className={styles.profileContainer}>
              <div className={styles.text}>
                  <h4 className={styles.name}>John Doe</h4>
                  <h2>Front-End Developer</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe officia molestiae repellendus voluptatem vero esse quis aspernatur incidunt id expedita?</p>
                  <button className={styles.btnProfile}>Download CV</button>
              </div>
              <div className={styles.image}>
                <Image src={profilePic} alt="profile" className={styles.profileImage}/>
              </div>
           </div>
        </div>
    </div>
  )
}

export default HomePage