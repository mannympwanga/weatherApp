import { useState } from 'react';
import { useWeather } from './hooks/useWeather';
import MapComponent from './components/MapComponent';
import { SearchBar } from './components/SearchBar';
import { WeatherInfo } from './components/WeatherInfo';
import { ThemeToggle } from './components/ThemeToggle';
import { ErrorMessage } from './components/ErrorMessage';
import styles from './css/App.module.css';
import axios from 'axios';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mapCenter, setMapCenter] = useState({ lat: -26.193, lng: 28.3082 });
  const { weatherData, error, getWeather } = useWeather();

  const handleSearch = async (query: string) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${
          import.meta.env.VITE_APP_API_KEY
        }`
      );
      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        setMapCenter({ lat, lng: lon });
        getWeather(lat, lon);
      }
    } catch (err) {
      console.error('Search error:', err);
    }
  };

  return (
    <div className={`${styles.app} ${darkMode ? styles.dark : ''}`}>
      <div className={styles.sidebar}>
        <div className={styles.controls}>
          <SearchBar onSearch={handleSearch} />
          <ThemeToggle darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />
        </div>
        <ErrorMessage message={error} />
        <WeatherInfo weatherData={weatherData} />
      </div>
      <MapComponent 
        center={mapCenter} 
        onLocationSelect={({ lat, lng }) => getWeather(lat, lng)} 
        darkMode={darkMode} // Pass darkMode prop
      />
    </div>
  );
};

export default App;