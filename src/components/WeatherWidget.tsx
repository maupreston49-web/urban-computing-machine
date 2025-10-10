import React, { useState, useEffect } from 'react';

interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  location: string;
  icon: string;
}

const WeatherWidget: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Get current date for more dynamic data
        const now = new Date();
        const hour = now.getHours();
        
        // Mock weather data that changes based on time of day
        const baseTemp = 75;
        const tempVariation = Math.sin((hour - 6) * Math.PI / 12) * 10; // Temperature varies throughout day
        const currentTemp = Math.round(baseTemp + tempVariation);
        
        // Different conditions based on time and random factor
        const conditions = ['Sunny', 'Partly Cloudy', 'Mostly Cloudy', 'Clear'];
        const icons = ['☀️', '⛅', '☁️', '🌙'];
        const conditionIndex = hour < 6 || hour > 18 ? 3 : Math.floor(Math.random() * 3);
        
        const mockWeather: WeatherData = {
          temperature: currentTemp,
          condition: conditions[conditionIndex],
          humidity: Math.floor(Math.random() * 30) + 50, // 50-80%
          windSpeed: Math.floor(Math.random() * 15) + 5, // 5-20 mph
          location: 'Jacksonville, FL',
          icon: icons[conditionIndex]
        };
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        setWeather(mockWeather);
      } catch (error) {
        console.error('Error fetching weather:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
    
    // Refresh weather every 5 minutes
    const interval = setInterval(fetchWeather, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const getWeatherAdvice = () => {
    if (!weather) return '';
    
    const temp = weather.temperature;
    if (temp > 85) return 'Perfect for early morning or evening treks!';
    if (temp > 75) return 'Great weather for outdoor adventures!';
    if (temp > 65) return 'Comfortable conditions for all activities.';
    if (temp > 55) return 'Good weather, consider bringing a light jacket.';
    return 'Bundle up for your outdoor adventures!';
  };

  if (loading) {
    return (
      <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl bg-bg p-6 text-secondary shadow-2xl shadow-primary/10">
        <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-primary/20 blur-2xl" aria-hidden="true" />
        <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-accent/30 blur-3xl" aria-hidden="true" />
        <div className="relative space-y-4">
          <h3 className="text-xl font-semibold">Today's Weather</h3>
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl bg-bg p-6 text-secondary shadow-2xl shadow-primary/10">
        <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-primary/20 blur-2xl" aria-hidden="true" />
        <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-accent/30 blur-3xl" aria-hidden="true" />
        <div className="relative space-y-4">
          <h3 className="text-xl font-semibold">Today's Weather</h3>
          <p className="text-sm text-secondary/70">Unable to load weather data</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl bg-bg p-6 text-secondary shadow-2xl shadow-primary/10">
      <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-primary/20 blur-2xl" aria-hidden="true" />
      <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-accent/30 blur-3xl" aria-hidden="true" />
      <div className="relative space-y-4">
        <h3 className="text-xl font-semibold">Today's Weather</h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold text-primary">{weather.temperature}°F</p>
            <p className="text-sm text-secondary/70">{weather.location}</p>
          </div>
          <div className="text-4xl">{weather.icon}</div>
        </div>
        <p className="text-sm text-secondary/70">
          {weather.condition} • {getWeatherAdvice()}
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
            Humidity: {weather.humidity}%
          </li>
          <li className="flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
            Wind: {weather.windSpeed} mph
          </li>
          <li className="flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
            Perfect conditions for outdoor adventures
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WeatherWidget;
