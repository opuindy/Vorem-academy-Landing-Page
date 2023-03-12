import React from 'react';
import styles from './banner.module.scss';
import { images } from '../../utilities/images';

const Banner = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerContainer__textContainer}>
          <h2>
            Learn Blockchain technology <br />
            and Web3 skills here
          </h2>
          <div className={styles.text}>
            <p>
              Vorem Academy is the all in one platform for all things blockchain
              and web3 mastery. Interested in learning and growing the essential
              skills for a career in the blockchain industry - from the basics
              to expert level. We've got you covered.
            </p>
          </div>
          <input
            type='text'
            name='nft'
            id='nft'
            placeholder='Search for a topic e.g NFTs'
          />
        </div>
        <div className={styles.bannerContainer__imageContainer}>
          {' '}
          <img src={images.bannerImage} alt='main_image' />
        </div>
      </div>
    </section>
  );
};

export default Banner;
