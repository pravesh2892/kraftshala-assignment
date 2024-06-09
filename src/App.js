import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import WeatherCard from "./components/WeatherCard";
import config from "./config";
import "./App.css";
const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
function App() {
  const [weatherList, setWeatherList] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [error, setError] = useState(null);

  // Effect to apply dark mode class to the body element when darkMode changes
  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  const fetchWeather = async (query) => {
    setError(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=d29f227531c5ea1fb01c5ec5724772a0&units=metric`
      );
      const data = await res.json();

      console.log("API Response:", data);

      if (res.ok && data.cod === 200) {
        setWeatherList((prevList) => [...prevList, data]);
      } else {
        setError(data.message || "An error occurred");
      }
    } catch (error) {
      console.error("Error fetching weather:", error);
      setError("Network error. Please try again.");
    }
  };

  // Function to remove a location from the weatherList
  const removeLocation = (index) => {
    setWeatherList((prevList) => prevList.filter((_, i) => i !== index));
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Navbar
        onSearch={fetchWeather}
        darkMode={darkMode}
        onToggle={() => setDarkMode(!darkMode)}
      />
      <main>
        {error && <div className="error">{error}</div>}
        {weatherList.map((weather, index) => (
          <WeatherCard
            key={`${weather.name}-${index}`}
            weather={weather}
            onRemove={() => removeLocation(index)}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
