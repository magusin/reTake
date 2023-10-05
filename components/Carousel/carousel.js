'use client'
import React from 'react'
import styles from './carousel.module.css'

const VideoCarousel = () => {
  const videos = [
    {
      src: 'https://www.youtube.com/embed/PExjHWbkafk',
      className: styles.a
    },
    {
      src: 'https://www.youtube.com/embed/difKLkqME4I',
      className: styles.b
    },
    {
      src: 'https://www.youtube.com/embed/ER7DFORQVt0',
      className: styles.c
    },
    {
      src: 'https://www.youtube.com/embed/fuj0Xy-vl-c',
      className: styles.d
    },
    {
      src: 'https://www.youtube.com/embed/Lyf-PicX7OY',
      className: styles.e
    },
    {
      src: 'https://www.youtube.com/embed/Yy0k8kYzflg',
      className: styles.f
    }
  ]
  const carouselRef = React.useRef(null)

  const numberOfVideos = 6
  const angle = 360 / numberOfVideos
  const [rotateValue, setRotateValue] = React.useState(0)
  const [windowWidth, setWindowWidth] = React.useState(0);
  
  const handleNext = () => {
    setRotateValue((prev) => prev - angle)
  }

  const handlePrev = () => {
    setRotateValue((prev) => prev + angle)
  }

  React.useEffect(() => {
    if (carouselRef.current) {
      const carousel = carouselRef.current
      carousel.style.setProperty('--angle', angle)
      carousel.style.transform = `rotateY(${rotateValue}deg)`
    }
  }, [angle, rotateValue])

  React.useEffect(() => {
    // Cette fonction ne s'exécutera que du côté client, après le rendu
    setWindowWidth(window.innerWidth);
    
    // Ajoutez un écouteur d'événement pour gérer le redimensionnement si nécessaire
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    // N'oubliez pas de supprimer l'écouteur lorsque le composant est démonté
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let radius;
  if (windowWidth < 601) {
    radius = 200;
  } else if (windowWidth > 600 && windowWidth < 1201) {
    radius = 360;
  } else {
    radius = 400;
  }

  return (
    <>
      <div className={styles.carouselContainer}>
        <div ref={carouselRef} className={styles.carousel}>
          {videos.map((video, index) => (
            <div
              key={index}
              style={{
                '--index': index,
                transform: `rotateY(${angle * index}deg) translateZ(${radius}px)`
              }}
              className={`${styles.item} ${video.className}`}
            >
              <iframe
                src={video.src}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          ))}
          {/* <div
            style={{
              '--index': 0,
              transform: `rotateY(${angle * 0}deg) translateZ(${radius}px)`
            }}
            className={`${styles.item} ${styles.a}`}
          >
            <iframe
              src="https://www.youtube.com/embed/PExjHWbkafk"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div
            style={{
              '--index': 1,
              transform: `rotateY(${angle * 1}deg) translateZ(${radius}px)`
            }}
            className={`${styles.item} ${styles.b}`}
          >
            <iframe
              src="https://www.youtube.com/embed/difKLkqME4I"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div
            style={{
              '--index': 2,
              transform: `rotateY(${angle * 2}deg) translateZ(${radius}px)`
            }}
            className={`${styles.item} ${styles.c}`}
          >
            <iframe
              src="https://www.youtube.com/embed/ER7DFORQVt0"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div
            style={{
              '--index': 3,
              transform: `rotateY(${angle * 3}deg) translateZ(${radius}px)`
            }}
            className={`${styles.item} ${styles.d}`}
          >
            <iframe
              src="https://www.youtube.com/embed/PExjHWbkafk"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div
            style={{
              '--index': 4,
              transform: `rotateY(${angle * 4}deg) translateZ(${radius}px)`
            }}
            className={`${styles.item} ${styles.e}`}
          >
            <iframe
              src="https://www.youtube.com/embed/difKLkqME4I"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div
            style={{
              '--index': 5,
              transform: `rotateY(${angle * 5}deg) translateZ(${radius}px)`
            }}
            className={`${styles.item} ${styles.f}`}
          >
            <iframe
              src="https://www.youtube.com/embed/ER7DFORQVt0"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div> */}
        </div>
      <div className={styles.next} onClick={handleNext}></div>
      <div className={styles.prev} onClick={handlePrev}></div>
      </div>
    </>
  )
}

export default VideoCarousel
