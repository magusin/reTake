'use client'
import React from 'react'
import styles from './page.module.css'
import Carousel from '#/components/Carousel/carousel'
import Header from '#/components/Header/header'

export default function Home() {
  return (
    <div>
      <main className="mainContent">
        <Header />

        <Carousel />
      </main>

      <footer className="footer">
        <p>&copy; 2023 Re: Take</p>
      </footer>
    </div>
  )
}
