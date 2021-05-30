import React, { Fragment } from 'react';
import Navbar from '../Navbar/Navbar';

const NotMatched = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "100vh"}}>
        <h1 className="display-1">404</h1>
        <h3 className="text-uppercase">Page Not Found!</h3>
      </div>
    </Fragment>
  );
};

export default NotMatched;