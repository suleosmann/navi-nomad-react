import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1 className='error-heading'>
          Oops! Looks like you 've lost your way...
        </h1>
        <Link className='btn btn-primary' to='/'>
          Back to home
        </Link>
      </div>
    </section>
  );
};

export default Error;
