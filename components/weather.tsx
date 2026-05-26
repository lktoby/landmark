import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useFormatter, useNow } from 'next-intl';

export async function fetchWeather(city: string): Promise<any> {
    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
        throw new Error('Weather data not found');
    }

    const data = await response.json();
    return data;
} 

interface WeatherProps {
city: string;
}

const Weather: React.FC<WeatherProps> = ({ city }) => {
    const format = useFormatter();
    const now = useNow();
    const [weather, setWeather] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchWeather(city)
        .then(setWeather)
        .catch(err => setError(err.message));
    }, [city]);

    if (error) return <div>Error fetching weather: {error}</div>;
    if (!weather) return <div>Loading...</div>;
    
    const icon_url = `https://openweathermap.org/payload/api/media/file/${weather.weather[0].icon}.png`;

  return (
    <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure>
              <Image src={icon_url} alt={weather.name} width={128} height={128} />
            </figure>
        <div className="card-body">
              <h1 className="card-title">{Math.round(weather.main.temp)}°C in {city} at {format.dateTime(now, {hour: 'numeric', minute: 'numeric', hour12: false})}</h1>
            <div className="card-actions">
                <p>{weather.weather[0].description}. your mom says you should wear a jacket.</p>
                {/* TODO: put some kinda ai here to generate weather advice from an asian mom (?) */}
            </div>
        </div>
    </div>
  );
};

export default Weather;