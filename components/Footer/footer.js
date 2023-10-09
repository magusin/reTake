import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Re: Take</p>
      <nav className={styles.nav}>
        <Link href="/mention" className={styles.link}>
          Mentions Légales
        </Link>{' '}
        <Link href="/cgu" className={styles.link}>
          CGU
        </Link>
      </nav>
    </footer>
  )
}

export default Footer
