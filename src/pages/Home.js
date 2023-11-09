import React from "react";
import Heading from "../components/Heading";
import Continents from "../components/Continents";
import CountryList from "../components/CountryList";

const Home = () => {
  return (
    <main>
      <Heading />
      <Continents />
      <CountryList />
    </main>
  );
};

export default Home;
