import React from 'react';
import styles from './chat.module.scss';
import { IoChatbubbleEllipsesSharp } from 'react-icons/io5';

const Chat = () => {
  return (
    <section className={styles.chatSection}>
      <div className={styles.chatIconContainer}>
        {' '}
        <IoChatbubbleEllipsesSharp
          className={styles.chatIconContainer__chatIcon}
        />
      </div>
    </section>
  );
};

export default Chat;
