import React from 'react'
import styles from './carousel.module.css'

const VideoCarousel = () => {
  const [rotateValue, setRotateValue] = React.useState(0);
  const carouselRef = React.useRef(null);

  const handleNext = () => {
    setRotateValue(prev => prev - 30);
  }

  const handlePrev = () => {
    setRotateValue(prev => prev + 30);
  }

  React.useEffect(() => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      carousel.style.transform = `rotateY(${rotateValue}deg)`;
    }
  }, [rotateValue]);

  return (
    <>
    <div className={styles.carouselContainer}>
    <div ref={carouselRef} className={styles.carousel}>
      <div className={`${styles.item} ${styles.a}`}>
          <iframe
            src="https://www.youtube.com/embed/PExjHWbkafk"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className={`${styles.item} ${styles.b}`}>
          <iframe
            src="https://www.youtube.com/embed/difKLkqME4I"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className={`${styles.item} ${styles.c}`}>          
        <iframe
            src="https://www.youtube.com/embed/ER7DFORQVt0"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className={`${styles.item} ${styles.d}`}>          
        <iframe
            src="https://www.youtube.com/embed/ER7DFORQVt0"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className={`${styles.item} ${styles.e}`}>
          <iframe
            src="https://www.youtube.com/embed/ER7DFORQVt0"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className={`${styles.item} ${styles.f}`}>
          <iframe
            src="https://www.youtube.com/embed/ER7DFORQVt0"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className={`${styles.item} ${styles.g}`}>
          <iframe
            src="https://www.youtube.com/embed/PExjHWbkafk"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className={`${styles.item} ${styles.h}`}>
          <iframe
            src="https://www.youtube.com/embed/difKLkqME4I"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className={`${styles.item} ${styles.i}`}>          
        <iframe
            src="https://www.youtube.com/embed/ER7DFORQVt0"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className={`${styles.item} ${styles.j}`}>          
        <iframe
            src="https://www.youtube.com/embed/ER7DFORQVt0"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className={`${styles.item} ${styles.k}`}>
          <iframe
            src="https://www.youtube.com/embed/ER7DFORQVt0"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className={`${styles.item} ${styles.l}`}>
          <iframe
            src="https://www.youtube.com/embed/ER7DFORQVt0"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
    <div className={styles.next} onClick={handleNext}>Next</div>
    <div className={styles.prev} onClick={handlePrev}>Prev</div>
    </>
  )
}

export default VideoCarousel
