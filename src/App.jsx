import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Serach from "./components/Serach";
import WeatherCard from "./components/WeatherCard";
import './App.css'

const App = () => {
  const [weatherDetails, setWeatherDetails] = useState(null);
  return (
    <div className="app">
      <div className="app-Container">
        <div>
          <Header />

          <Serach setWeatherDetails={setWeatherDetails} />
          {weatherDetails && <WeatherCard weatherDetails={weatherDetails} />}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
