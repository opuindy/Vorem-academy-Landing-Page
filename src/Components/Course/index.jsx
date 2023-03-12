import React, { useRef } from 'react';
import styles from './course.module.scss';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import { courseList } from '../../utilities/courseList';
import {
  IoPlayCircleSharp,
  IoChevronForward,
  IoChevronBack,
} from 'react-icons/io5';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import { images } from '../../utilities/images';

const Course = () => {
  const carousel = useRef(null);
  const responsive = {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1204: {
      items: 3,
    },
  };

  return (
    <>
      <section className={styles.courseSection}>
        <div className={styles.coursesContainer}>
          <h3>Courses</h3>
          <div className={styles.sliderContainer}>
            <AliceCarousel
              ref={carousel}
              duration={500}
              autoPlay={true}
              startIndex={0}
              mouseDragEnabled={true}
              disableDotsControls={true}
              keyboardNavigation={true}
              responsive={responsive}
              mouseTracking
              animationType='slide'
              animationDuration={1300}
              autoPlayInterval={600}
              autoPlayDirection='ltr'
              disableButtonsControls={true}
              autoPlayActionDisabled={true}
              infinite={true}
            >
              {courseList.map((list, index) => {
                const { title, image, text, lesson, color, packages } = list;

                return (
                  <article className={styles.cardContainer} key={index}>
                    <div className={styles.card}>
                      <div className={styles.cardImageContainer}>
                        <div
                          className={styles.cardImageContainer__imageContainer}
                        >
                          <img src={image} alt='title_image' />
                        </div>
                        <div
                          className={`${styles.cardImageContainer__preview} `}
                        >
                          <p>preview</p>
                          <img src={images.preview} alt='view_icon' />
                        </div>
                      </div>
                      <div className={styles.cardTextContainer}>
                        <h4 className={styles.cardTextContainer__title}>
                          {title}
                        </h4>
                        <p
                          className={`${styles.cardTextContainer__package} ${styles[color]}`}
                        >
                          {packages}
                        </p>
                        <p className={styles.cardTextContainer__text}>{text}</p>
                        <div
                          className={styles.cardTextContainer__buttonContainer}
                        >
                          <button className={styles.playButton}>
                            Start now{' '}
                            <IoPlayCircleSharp
                              className={styles.playButton__playIcon}
                            />
                          </button>
                          <p>{lesson}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </AliceCarousel>
          </div>
          <div className={styles.customButtonContainer}>
            <div
              className={`${styles.customButton} ${styles.customPrev}`}
              onClick={(e) => carousel?.current?.slidePrev(e)}
            >
              <IoChevronBack className={styles.arrowIcons} />
            </div>
            <div
              className={`${styles.customButton} ${styles.customNext}`}
              onClick={(e) => carousel?.current?.slideNext(e)}
            >
              <IoChevronForward className={styles.arrowIcons} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Course;
