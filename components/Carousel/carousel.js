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

  const numberOfVideos = videos.length
  const angle = 360 / numberOfVideos
  const [rotateValue, setRotateValue] = React.useState(0)
  const [windowWidth, setWindowWidth] = React.useState(0)

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
    videoWidth = 360
  } else {
    videoWidth = 400
  }
  const radius = (numberOfVideos - 6) * 25 + videoWidth
  const scale = videoWidth / radius
  const buttonMargin = radius - (radius / numberOfVideos)

  return (
    <>
      <div className={styles.carouselContainer}>
        <div ref={carouselRef} className={styles.carousel}>
          {videos.map((video, index) => (
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
