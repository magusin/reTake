'use client'
import React from 'react'
import styles from './page.module.css'
import Carousel from '#/components/Carousel/carousel'
import Header from '#/components/Header/header'
import Footer from '#/components/Footer/footer'

export default function Home() {
  return (
    <div>
      <main className="mainContent">
        <Header />
        <Carousel />
        <Footer />
      </main>
    </div>
  )
}
