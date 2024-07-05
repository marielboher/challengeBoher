"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from "../styles/header.module.css";
import imageUrl from "../public/profile.svg";
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.profile}>
        <div className={styles.profileInfo}>
          <div className={styles.profileImage}>
            <Link href="/">
            <Image src={imageUrl} alt="Profile Image" className={styles.imageProfile} />
            </Link>
          </div>
          <div className={styles.profileName}>JOHN DOE</div>
        </div>
      </div>
      <nav className={styles.navigation}>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </div>
        <ul className={isMenuOpen ? styles.active : ''}>
          <li onClick={handleMenuItemClick}>
            <Link href="/">
              <p>Home</p>
            </Link>
          </li>
          <li onClick={handleMenuItemClick}>
            <Link href="/about">
              <p>About</p>
            </Link>
          </li>
          <li onClick={handleMenuItemClick}>
            <Link href="/interests">
              <p>Interests</p>
            </Link>
          </li>
          <li onClick={handleMenuItemClick}>
            <Link href="/contact">
              <p>Contact</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
