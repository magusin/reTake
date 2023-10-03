'use client'
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './page.module.css';
import Carousel from '#/components/Carousel/carousel';

export default function Home() {


  return (
   <div>
      <Head>
        <title>Re Take</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mainContent">
        <Image src="/logo.png" alt="Re Take Logo" width="150" height="150" />
        <Carousel />
       
      </main>

      <footer className="footer">
        <p>&copy; 2023 Re: Take</p>
      </footer>
      </div>
  )
}