// Weather App Configuration
// Replace the API_KEY with your actual OpenWeatherMap API key

const CONFIG = {
    // Get your free API key from: https://openweathermap.org/api
    API_KEY: 'a5fa602a37878650e0f9dd16cabbba8f',
    
    // API Base URL
    BASE_URL: 'https://api.openweathermap.org/data/2.5/weather',
    
    // Units: 'metric' for Celsius, 'imperial' for Fahrenheit
    UNITS: 'metric',
    
    // Language for weather descriptions
    LANG: 'en',
    
    // App settings
    APP_NAME: 'Weather App',
    VERSION: '1.0.0'
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} 