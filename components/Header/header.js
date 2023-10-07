import React from 'react';
import styles from './header.module.css';
import Image from 'next/image'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
      <Image
          priority
          src="/logo.png"
          alt="Re: Take Logo"
          width="80"
          height="80"
        />
      </div>
      <nav className={styles.nav}>
        <a href="#" className={styles.link}>Accueil</a>
        <a href="#" className={styles.link}>À propos</a>
        <a href="#" className={styles.link}>Services</a>
        <a href="#" className={styles.link}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;