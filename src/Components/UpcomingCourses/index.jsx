import React from 'react';
import styles from './upcomingCourse.module.scss';
import { IoArrowForwardCircleSharp } from 'react-icons/io5';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import { upComingCourses } from '../../utilities/courseList';

const UpcomingCourses = () => {
  const responsive = {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    920: { items: 3 },
    1024: {
      items: 5,
    },
  };

  const options = {
    animationType: 'slide',
    animationDuration: 10000,
    // infinite: true,
    // autoPlay: true,
    controlsStrategy: 'default',
    animationTimingFunction: 'cubic-bezier(.42,0,.58,1)',
  };

  return (
    <section className={styles.upcomingSection}>
      <div className={styles.upcomingContainer}>
        <h3>Upcoming Courses</h3>
        <p>
          Learn about our wide range of courses to expand to expand your dept in
          Blockchain Engineering
        </p>
        <div className={styles.sliderContainer}>
          <AliceCarousel
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
            autoPlayActionDisabled={true}
            disableButtonsControls={true}
            freezable={false}
            infinite={true}
            options={options}
          >
            {upComingCourses.map((course, index) => {
              return (
                <div className={styles.slideItemsWrapper} key={index}>
                  <div className={styles.slideItems} key={index}>
                    <p>{course}</p>{' '}
                    <IoArrowForwardCircleSharp className={styles.arrowIcon} />
                  </div>
                </div>
              );
            })}
          </AliceCarousel>
        </div>
        <div className={styles.studentContainer}>
          <h3 className={styles.studentContainer__title}>Become a student</h3>
          <p>
            Our courses are built with keeping all levels of users in mind.
            Learn from industry experts and open up a whole new series of
            possibilities.
          </p>
          <button>Register</button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingCourses;
