import React from 'react';
import styles from './courses.module.scss';
import Slider from 'react-slick';
import useWindowWidth from '../../Hooks/useWindowWidth';
import { courseList } from '../../utilities/courseList';
import {
  IoPlayCircleSharp,
  IoChevronForward,
  IoChevronBack,
} from 'react-icons/io5';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import { images } from '../../utilities/images';

const Courses = () => {
  const { windowWidth } = useWindowWidth();
  let slidesToShow = 3;

  if (windowWidth < 1024) {
    slidesToShow = 2;
  }

  if (windowWidth < 768) {
    slidesToShow = 1;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    className: 'sliderContentContainer',
    easing: 'cubic-bezier(0.86,0,0.07,1)',
  };

  const slickPrev = () => {
    slider.slickPrev();
  };

  const slickNext = () => {
    slider.slickNext();
  };

  let slider;

  return (
    <>
      <section className={styles.courseSection}>
        <div className={styles.coursesContainer}>
          <h3>Courses</h3>
          <div className={styles.sliderContainer}>
            <Slider {...settings} ref={(c) => (slider = c)}>
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
            </Slider>
          </div>
          <div className={styles.customButtonContainer}>
            <div
              className={`${styles.customButton} ${styles.customPrev}`}
              onClick={slickPrev}
            >
              <IoChevronBack className={styles.arrowIcons} />
            </div>
            <div
              className={`${styles.customButton} ${styles.customNext}`}
              onClick={slickNext}
            >
              <IoChevronForward className={styles.arrowIcons} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
