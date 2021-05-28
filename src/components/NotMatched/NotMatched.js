import React, { Fragment } from 'react';

const NotMatched = () => {
  return (
    <Fragment>
      <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "100vh"}}>
        <h1 className="display-1">404</h1>
        <h3 className="text-uppercase">Page Not Found!</h3>
      </div>
    </Fragment>
  );
};

export default NotMatched;