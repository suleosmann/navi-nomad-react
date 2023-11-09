import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";

const url = "https://restcountries.com/v2/alpha/";

const CountryInfo = () => {
  const { id } = useParams();

  // Set up initial/default state values...
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState(null);

  // With useEffect hook, make sure country info is fetched every time the component renders and/or the id changes by declaring and invoking the fetchCountry function
  useEffect(() => {
    // Toggle Loading to on to tell user we're fetching data:
    setLoading(true);
    async function fetchCountry() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data) {
          // Destructing with (some) aliases...
          const {
            area,
            borders,
            alpha2Code,
            alpha3Code,
            capital,
            callingCodes: tel,
            currencies,
            demonym,
            languages,
            flag,
            name,
            nativeName,
            population,
            region: location,
            topLevelDomain: domain,
          } = data;
          // Create new country object with simplified property names...
          const newCountry = {
            area,
            borders,
            alpha2Code,
            alpha3Code,
            capital,
            tel,
            currencies,
            demonym,
            languages,
            flag,
            name,
            nativeName,
            population,
            location,
            domain,
          };
          // Update state value..
          setCountry(newCountry);
        } else {
          setCountry(null);
        }
        // Toggle Loading to off if data fetch succeeds:
        setLoading(false);
      } catch (error) {
        console.log(error);
        // Toggle Loading to off if an error occurs:
        setLoading(false);
      }
    }
    fetchCountry();
  }, [id]);

  // CONDITIONAL RENDERING
  // condition 1: return loading component
  if (loading) {
    return <Loading />;
  }
  // condition 2: return user feedback message in case of empty data (API) endpoint...
  if (!country) {
    return (
      <section className='section cocktail-section'>
        <h2 className='section-title'> No country found! </h2>
        <Link to='/' className='btn btn-primary'>
          Return home
        </Link>
      </section>
    );
  }
  // condition 3: destructure and display properties from state value...
  const {
    area,
    borders,
    alpha2Code,
    alpha3Code,
    capital,
    tel,
    flag,
    currencies,
    languages,
    name,
    nativeName,
    population,
    location,
    domain,
  } = country;

  return (
    <section className='section country-section'>
      <h2 className='section-title'> {name.replace(" and ", " & ")} </h2>
      <h3 className='section-subtitle'> {nativeName} </h3>
      <div className='country-info'>
        <img src={flag} alt={name} />
        <div className='country-footer'>
          <div className='country-info-wrapper'>
            <p>
              <span> Capital: </span> {capital}
            </p>
            <p>
              <span> Population: </span>
              {population
                ? population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : "n/a"}
            </p>
            <p>
              <span> Area: </span>
              {area
                ? area
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    .concat(" km²")
                : "n/a"}
            </p>
            <p>
              <span> Currency: </span> {currencies[0].name} (
              {currencies[0].symbol})
            </p>
            <p>
              <span> Language(s): </span>
              {languages.map((item, index) => {
                return item && index !== languages.length - 1 ? (
                  <span className='language' key={index}>
                    {`${item.name}, `}
                  </span>
                ) : item && index === languages.length - 1 ? (
                  <span className='language' key={index}>
                    {`${item.name}`}
                  </span>
                ) : null;
              })}
            </p>
            <p>
              <span> Country codes: </span> {alpha2Code} / {alpha3Code}
            </p>
            <p>
              <span> Calling code: </span> +{tel}
            </p>
            <p>
              <span> Top-level domain: </span> {domain}
            </p>
          </div>
          <div className='country-info-wrapper'>
            <p>
              <span> Region: </span> {location}
            </p>
            <p>
              <span> Neighbouring countries: </span>
            </p>
            <p className='btn-container neighbours-wrapper'>
              {borders.map((item, index) => {
                return item ? (
                  <Link
                    to={`/country/${item}`}
                    className='filter-btn'
                    key={index}
                  >
                    {item}
                  </Link>
                ) : null;
              })}
            </p>
          </div>
          <div className='btn-return-wrapper'>
            <Link to='/' className='btn btn-primary btn-return'>
              Return home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryInfo;
