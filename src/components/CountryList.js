import React, { useEffect } from "react";
import Country from "./Country";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CountryList = () => {
  // Destructure context values for easy access...
  const { countries, loading, setCountrySearch } = useGlobalContext();

  useEffect(() => {
    setCountrySearch("all");
  }, [setCountrySearch]);

  // CONDITIONAL RENDERING
  // condition 1: return loading component
  if (loading) {
    return <Loading />;
  }
  // condition 2: return user feedback message in case of invalid search (empty array condition)
  if (!countries) {
    return (
      <h2 className='section-title'>
        No countries found.Please try another search!
      </h2>
    );
  }
  // condition 3: return Country component (default) by iterating over the array of fetched countries made available by global context hook
  // Use an object spread operator (line 30) to give the Country component access to all necessary properties of the country object
  return (
    <section className='section'>
      <div className='countries-center'>
        {" "}
        {countries.map((country) => {
          return <Country key={country.id} {...country} />;
        })}{" "}
      </div>{" "}
    </section>
  );
};

export default CountryList;
