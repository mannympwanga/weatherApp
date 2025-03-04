import { useState } from 'react';
import axios from 'axios';
import { WeatherData } from '../types/weather.ts';

export const useWeather = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [error, setError] = useState<string>('');

    const getWeather = async (lat: number, lon: number) => {
        try {
            const apiKey = import.meta.env.VITE_APP_API_KEY;
            console.log('API Key:', apiKey); 
            if (!apiKey) {
                throw new Error('API key is missing');
            }

            console.log('Fetching weather data with API key:', apiKey);

            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
            );

            console.log('API response:', response.data);

            setWeatherData(response.data);
            setError('');
        } catch (err) {
            console.error('Error fetching weather data:', err);
            setError('Failed to fetch weather data. Please try again.');
        }
    };

    return { weatherData, error, getWeather };
};