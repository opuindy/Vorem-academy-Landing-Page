import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Nav from '../Nav';

const LayOut = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayOut;
