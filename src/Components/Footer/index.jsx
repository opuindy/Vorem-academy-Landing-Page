import React from 'react';
import { images } from '../../utilities/images';
import {
  IoCall,
  IoMail,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoYoutube,
} from 'react-icons/io5';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.content}>
            <h4>Courses</h4>
            <p>Intro to Distrubuted Ledger Technologies {`(DLTs)`}</p>
            <p>Solidity Blockchain Development</p>
            <p>Development on EVM</p>
            <p>Intro to 2D NFTs</p>
          </div>
          <div className={styles.content}>
            <h4>Contact us</h4>
            <p>
              {' '}
              <IoCall className={styles.Icon} /> +23409061475401
            </p>
            <p>
              {' '}
              <IoMail className={styles.Icon} />
              info@vorem.co
            </p>
            <p>
              {' '}
              <IoMail className={styles.Icon} />
              support@vorem.co
            </p>
          </div>
          <div className={styles.content}>
            <h4>Extra Links</h4>
            <p>Community</p>
            <p>Blog</p>
            <p>Privacy Policy</p>
            <p>Careers</p>
          </div>
          <div className={styles.content}>
            <h4>Support</h4>
            <p>FAQs</p>
            <p>Contact</p>
          </div>
        </div>
        <div className={styles.logo_LinkContainer}>
          <img src={images.logo} alt='vorem-logo' className={styles.logo} />
          <div className={styles.copyRight_linksContainer}>
            <p>&copy; 2022 Chainconsults . All Rights Reserved</p>
            <div className={styles.copyRight_linksContainer__logos}>
              <IoLogoFacebook className={styles.linkIcon} />
              <IoLogoTwitter className={styles.linkIcon} />
              <IoLogoLinkedin className={styles.linkIcon} />
              <IoLogoInstagram className={styles.linkIcon} />
              <IoLogoYoutube className={styles.linkIcon} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
