import React from 'react'
import styles from './header.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
        <Image
          priority
          src="/logo.png"
          alt="Re: Take Logo"
          width="80"
          height="80"
        />
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>Accueil
        </Link>
        <Link href="/about" className={styles.link}>À propos
        </Link>
        <Link href="/contact" className={styles.link}>Contact
        </Link>
      </nav>
    </header>
  )
}

export default Header
