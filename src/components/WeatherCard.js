import React from "react";
import feelsLikeIcon from "../assets/thermomater.png";
import humidityIcon from "../assets/humidity.png";
import windSpeedIcon from "../assets/windock.png";
import minTempIcon from "../assets/temorature-min.png";
import maxTempIcon from "../assets/temprature-max.png";

const WeatherCard = ({ weather, onRemove }) => {
  // Destructure weather data from props
  const {
    name,
    main: { temp, feels_like, humidity, temp_min, temp_max },
    weather: weatherInfo,
    wind: { speed: windSpeed },
    dt,
  } = weather;

  // Get the icon ID from the first weather object
  const iconId = weatherInfo[0].icon;

  // Construct the icon URL
  const iconUrl = `https://openweathermap.org/img/wn/${iconId}@2x.png`;

  // Create date formatter for DD/MM/YYYY format
  const dateFormatter = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  // Create time formatter for HH:MM AM/PM format
  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  // Format the Unix timestamp to readable date and time
  const formattedDate = dateFormatter.format(new Date(dt * 1000));
  const formattedTime = timeFormatter.format(new Date(dt * 1000));

  return (
    <div className="weather-card">
      <button className="remove-btn" onClick={onRemove}>
        ×
      </button>
      <h2>{name}</h2>
      <div className="weather-main">
        <p className="temp">{Math.round(temp)}°C</p>
        <img src={iconUrl} alt={weatherInfo[0].description} />
      </div>
      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-value">{weatherInfo[0].description}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Feels like:</span>
          <span className="detail-value">{Math.round(feels_like)}°C</span>
          <img className="detail-img" src={feelsLikeIcon} alt="" />
        </div>
        <div className="detail-item">
          <span className="detail-label">Humidity:</span>
          <span className="detail-value">{humidity}%</span>
          <img className="detail-img" src={humidityIcon} alt="" />
        </div>
        <div className="detail-item">
          <span className="detail-label">Wind Speed:</span>
          <span className="detail-value">
            {Math.round(windSpeed * 3.6)} km/h
          </span>
          <img className="detail-img" src={windSpeedIcon} alt="" />
        </div>
        <div className="detail-item temp-min">
          <span className="detail-label">Min Temp:</span>
          <span className="detail-value">{Math.round(temp_min)}°C</span>
          <img className="detail-img" src={minTempIcon} alt="" />
        </div>
        <div className="detail-item temp-max">
          <span className="detail-label">Max Temp:</span>
          <span className="detail-value">{Math.round(temp_max)}°C</span>
          <img className="detail-img" src={maxTempIcon} alt="Max temp icon" />
        </div>
      </div>
      <div className="weather-date">
        <p>Date: {formattedDate}</p>
        <p>Time: {formattedTime}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
