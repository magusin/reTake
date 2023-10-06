'use client'
import React from 'react'
import styles from './carousel.module.css'

const VideoCarousel = () => {
  const videoSet1 = [
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
      src: 'https://www.youtube.com/embed/4P1ibgyU1Io',
      className: styles.d
    },
    {
      src: 'https://www.youtube.com/embed/dYuCKN9O0I0',
      className: styles.e
    },
    {
      src: 'https://www.youtube.com/embed/fuj0Xy-vl-c',
      className: styles.f
    }
  ]

  const videoSet2 = [
    {
      src: 'https://www.youtube.com/embed/Lyf-PicX7OY',
      className: styles.a
    },
    {
      src: 'https://www.youtube.com/embed/Yy0k8kYzflg',
      className: styles.b
    },
    {
      src: 'https://www.youtube.com/embed/_HG9lkBA4Wo',
      className: styles.c
    },
    {
      src: 'https://www.youtube.com/embed/dOrg7ZQK0rQ',
      className: styles.d
    },
    {
      src: 'https://www.youtube.com/embed/Mi538LjMkuo',
      className: styles.e
    },
    {
      src: 'https://www.youtube.com/embed/v1UD85haoxU',
      className: styles.f
    }
  ]

  const videoSet3 = [
    {
      src: 'https://www.youtube.com/embed/zWZbPDbn-6Q',
      className: styles.a
    },
    {
      src: 'https://www.youtube.com/embed/k_cr6ZuH4-s',
      className: styles.b
    },
    {
      src: 'https://www.youtube.com/embed/wdh6irl1V3U',
      className: styles.c
    },
    {
      src: 'https://www.youtube.com/embed/dAD5ILkwnQs',
      className: styles.d
    },
    {
      src: 'https://www.youtube.com/embed/aFDwwuReIjg',
      className: styles.e
    },
    {
      src: 'https://www.youtube.com/embed/_eL3-6YYWYE',
      className: styles.f
    },
    {
      src: 'https://www.youtube.com/embed/JndabkwIEnk',
      className: styles.f
    },
    {
      src: 'https://www.youtube.com/embed/i0JDoxVlhd8',
      className: styles.g
    },
    {
      src: 'https://www.youtube.com/embed/_vJfPCl293c',
      className: styles.h
    }
  ]
  const carouselRef = React.useRef(null)

  const [rotateValue, setRotateValue] = React.useState(0)
  const [windowWidth, setWindowWidth] = React.useState(0)
  const [currentVideos, setCurrentVideos] = React.useState(videoSet1)
  const numberOfVideos = currentVideos.length
  const angle = 360 / numberOfVideos
  
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
    setWindowWidth(window.innerWidth)
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  let videoWidth
  if (windowWidth < 601) {
    videoWidth = 200
  } else if (windowWidth > 600 && windowWidth < 1201) {
    videoWidth = 300
  } else {
    videoWidth = 400
  }
  const radius = (numberOfVideos - 6) * 25 + videoWidth
  const scale = videoWidth / radius
  const buttonMargin = radius - radius / numberOfVideos

  return (
    <>
      <div className={styles.carouselContainer}>
        <div className={styles.buttonsBar}>
          <button className={styles.button} onClick={() => setCurrentVideos(videoSet1)} >Set 1</button>
          <button className={styles.button} onClick={() => setCurrentVideos(videoSet2)} >Set 2</button>
          <button className={styles.button} onClick={() => setCurrentVideos(videoSet3)} >Set 3</button>
        </div>
        <div ref={carouselRef} className={styles.carousel}>
          {currentVideos.map((video, index) => (
            <div
              key={index}
              style={{
                '--index': index,
                transform: `rotateY(${
                  angle * index
                }deg) translateZ(${radius}px) scale(${scale})`
              }}
              className={`${styles.item} ${video.className}`}
            >
              <iframe src={video.src} frameBorder="0" allowFullScreen></iframe>
            </div>
          ))}
        </div>
        <div
          className={styles.next}
          onClick={handleNext}
          style={{ marginRight: `-${buttonMargin}px` }}
        ></div>
        <div
          className={styles.prev}
          onClick={handlePrev}
          style={{ marginLeft: `-${buttonMargin}px` }}
        ></div>
      </div>
    </>
  )
}

export default VideoCarousel
