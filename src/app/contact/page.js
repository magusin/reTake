import React from 'react'
import styles from './page.module.css'
import Header from '#/components/Header/header'
import { BsTwitter } from 'react-icons/bs'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaDiscord } from 'react-icons/fa'

import Link from 'next/link'

const Contact = () => {
  return (
    <div>
      <main className="mainContent">
        <Header />
        <div className={styles.container}>
          <h1 className={styles.title}>Nos médias</h1>
          <p className={styles.description}>
            Suivez-nous sur nos plateformes sociales :
          </p>
          <div className={styles.section}>
            <h2>Re: Take</h2>
            <div className={styles.socialLinks}>
              <div className={styles.linkWrapper}>
                <FaInstagram />

                <Link
                  href="https://www.instagram.com/retakeofficiel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Instagram de la chaîne
                </Link>
              </div>
              <div className={styles.linkWrapper}>
                <BsTwitter />
                <Link
                  href="https://twitter.com/RetakeOfficiel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Twitter de la chaîne
                </Link>
              </div>
              <div className={styles.linkWrapper}>
                <FaFacebook />
                <Link
                  href="https://www.facebook.com/ReTakeOfficiel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Facebook de la chaîne
                </Link>
              </div>
              <div className={styles.linkWrapper}>
                <FaDiscord />
                <Link
                  href="https://discord.com/invite/retake"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Discord de la chaîne
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.sectionContainer }>
          <div className={styles.section}>
            <h2>Victor NIVERD</h2>
            <div className={styles.socialLinks}>
              <div className={styles.linkWrapper}>
                <FaInstagram />

                <Link
                  href="https://www.instagram.com/victor.niverd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Instagram
                </Link>
              </div>
              <div className={styles.linkWrapper}>
                <BsTwitter />
                <Link
                  href="https://twitter.com/Victor_Niverd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Twitter
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <h2>Maxime HOAREAU</h2>
            <div className={styles.socialLinks}>
              <div className={styles.linkWrapper}>
                <FaInstagram />

                <Link
                  href="https://www.instagram.com/maxime.e.hoareau"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Instagram
                </Link>
              </div>
              <div className={styles.linkWrapper}>
                <BsTwitter />
                <Link
                  href="https://twitter.com/Max_Hoareau"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Twitter
                </Link>
              </div>
            </div>
          </div>   
          </div>
        </div>
      </main>
    </div>
  )
}

export default Contact
