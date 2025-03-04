import { WeatherData } from "../types/weather.ts";
import styles from './weatherInfo.module.css';

interface WeatherInfoProps {
  weatherData: WeatherData | null;
}

export const WeatherInfo = ({ weatherData }: WeatherInfoProps) => {
    if (!weatherData) return null;

    return (
    <div className={styles.weatherInfo}>
      <h2>{weatherData.name}</h2>
      <div className={styles.weatherMain}>
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt="Weather icon"
        />
        <div>
          <p className={styles.temperature}>{Math.round(weatherData.main.temp)}°C</p>
          <p className={styles.description}>{weatherData.weather[0].description}</p>
        </div>
      </div>
      <div className={styles.weatherDetails}>
        <p>Humidity: {weatherData.main.humidity}%</p>
        <p>Wind: {weatherData.wind.speed} m/s</p>
      </div>
    </div>
    );
};