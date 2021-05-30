import React, { Fragment } from 'react';
import HomeContent from '../HomeContent/HomeContent';
import Navbar from '../Navbar/Navbar';

const Home = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <HomeContent></HomeContent>
    </Fragment>
  );
};

export default Home;