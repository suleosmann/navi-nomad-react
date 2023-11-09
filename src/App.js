import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages from pages directory
import Home from "./pages/Home";
import CountryInfo from "./pages/CountryInfo";
import Error from "./pages/Error";

// import component(s) from components directory
import ScrollButton from "./components/ScrollButton";

function App() {
  // Wrap the app in the router component and add an inner route for each page...
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/country/:id' element={<CountryInfo />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ScrollButton />
    </Router>
  );
}

export default App;
