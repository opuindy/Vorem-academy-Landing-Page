import React from 'react';
import styles from './backToTop.module.scss';
import useScrollHeight from '../../Hooks/useScrollHeight';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

const BackToTop = () => {
  const { scrollHeight } = useScrollHeight();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section
      className={scrollHeight > 350 ? styles.container : styles.vanish}
      onClick={scrollToTop}
    >
      <MdKeyboardDoubleArrowUp className={styles.icon} />
    </section>
  );
};

export default BackToTop;
