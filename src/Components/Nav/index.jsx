import React, { useState, useRef, useEffect } from 'react';
import useScrollHeight from '../../Hooks/useScrollHeight';
import { images } from '../../utilities/images';
import { links } from '../../utilities/links';
import { Link } from 'react-router-dom';
import styles from './nav.module.scss';

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const { scrollHeight } = useScrollHeight();
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const changeBckgrd = scrollHeight >= 45 ? true : false;

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px `;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <header className={`${styles.header} ${styles[changeBckgrd.toString()]}`}>
      <nav className={styles.header__navContainer}>
        <div className={styles.logo_Button_Container}>
          <Link to='/'>
            <div className={styles.logoContainer}>
              <img src={images.logo} alt='vorem_logo' />
            </div>
          </Link>

          <div
            className={styles.menuBtn}
            onClick={() => setShowLinks(!showLinks)}
          >
            <span
              className={
                showLinks
                  ? `${styles.menuBtn__burger} ${styles.open}`
                  : `${styles.menuBtn__burger}`
              }
            ></span>
          </div>
        </div>
        <div className={styles.linksContainer} ref={linksContainerRef}>
          <ul className={styles.navLinks} ref={linksRef}>
            {links.map((linkItem, index) => {
              const { text, url, id } = linkItem;

              return (
                <Link key={id} to={url} className={styles.LinkContainer}>
                  <li
                    key={id}
                    className={`${styles.link} ${
                      links.length - 1 === index && styles.lastLink
                    }`}
                  >
                    <span>{text}</span>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
