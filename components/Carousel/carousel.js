import React from 'react'
import styles from './carousel.module.css'

const VideoCarousel = () => {
  const carouselRef = React.useRef(null)

  const numberOfVideos = 6
  const angle = 360 / numberOfVideos
  const [rotateValue, setRotateValue] = React.useState(0)
  let radius
  if (window.innerWidth < 601) {
    radius = 200
  }
    else if (window.innerWidth > 600 && window.innerWidth < 1201) {
    radius = 360
  } else {
    radius = 400
  }
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

  return (
    <>
      <div className={styles.carouselContainer}>
        <div ref={carouselRef} className={styles.carousel}>
          <div
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
          </div>
        </div>
      <div className={styles.next} onClick={handleNext}></div>
      <div className={styles.prev} onClick={handlePrev}></div>
      </div>
    </>
  )
}

export default VideoCarousel
