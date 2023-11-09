import React from "react";
import { Link } from "react-router-dom";

const Country = ({ flag, name, id, capital, population }) => {
  return (
    <article className='country'>
      <div className='img-container'>
        <Link to={`/country/${id}`}>
          <img src={flag} alt={name} className='flag-more-info' />
        </Link>
      </div>
      <div className='country-footer'>
        <div className='text-wrapper'>
          <h3>{name.replace(" and ", " & ")}</h3>
          <p>
            <span>Capital:</span> {capital}
          </p>
          <p>
            <span>Population:</span>{" "}
            {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
        </div>
        <Link to={`/country/${id}`} className='btn btn-primary'>
          more info
        </Link>
      </div>
    </article>
  );
};

export default Country;
