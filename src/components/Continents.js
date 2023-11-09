import React from "react";
import { useGlobalContext } from "../context";

const Continents = () => {
  const { fetchCountries } = useGlobalContext();
  return (
    <>
      <div className='btn-container'>
        <button
          className='filter-btn btn-all'
          onClick={() => fetchCountries("all")}
        >
          All{" "}
        </button>{" "}
      </div>{" "}
      <div className='btn-container-wrapper'>
        <div className='btn-container'>
          <button
            className='filter-btn'
            onClick={() => fetchCountries("Africa")}
          >
            Africa{" "}
          </button>{" "}
          <button
            className='filter-btn'
            onClick={() => fetchCountries("Americas")}
          >
            Americas{" "}
          </button>{" "}
          <button className='filter-btn' onClick={() => fetchCountries("Asia")}>
            Asia{" "}
          </button>{" "}
        </div>{" "}
        <div className='btn-container'>
          <button
            className='filter-btn'
            onClick={() => fetchCountries("Europe")}
          >
            Europe{" "}
          </button>{" "}
          <button
            className='filter-btn'
            onClick={() => fetchCountries("Oceania")}
          >
            Oceania{" "}
          </button>{" "}
          <button
            className='filter-btn'
            onClick={() => fetchCountries("Other")}
          >
            Other{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default Continents;
