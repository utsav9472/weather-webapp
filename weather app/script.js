// OpenWeatherMap API Configuration
const API_KEY = CONFIG.API_KEY;
const BASE_URL = CONFIG.BASE_URL;

// DOM Elements
const searchForm = document.getElementById('searchForm');
const cityInput = document.getElementById('cityInput');
const weatherContainer = document.getElementById('weatherContainer');
const errorContainer = document.getElementById('errorContainer');
const loading = document.getElementById('loading');

// Weather icon mapping
const weatherIcons = {
    '01d': 'fas fa-sun',
    '01n': 'fas fa-moon',
    '02d': 'fas fa-cloud-sun',
    '02n': 'fas fa-cloud-moon',
    '03d': 'fas fa-cloud',
    '03n': 'fas fa-cloud',
    '04d': 'fas fa-clouds',
    '04n': 'fas fa-clouds',
    '09d': 'fas fa-cloud-rain',
    '09n': 'fas fa-cloud-rain',
    '10d': 'fas fa-cloud-sun-rain',
    '10n': 'fas fa-cloud-moon-rain',
    '11d': 'fas fa-bolt',
    '11n': 'fas fa-bolt',
    '13d': 'fas fa-snowflake',
    '13n': 'fas fa-snowflake',
    '50d': 'fas fa-smog',
    '50n': 'fas fa-smog'
};

// Event Listeners
searchForm.addEventListener('submit', handleSearch);

// Handle search form submission
async function handleSearch(e) {
    e.preventDefault();
    
    const city = cityInput.value.trim();
    if (!city) return;
    
    showLoading();
    hideError();
    hideWeather();
    
    try {
        const weatherData = await getWeatherData(city);
        displayWeather(weatherData);
    } catch (error) {
        displayError(error.message);
    } finally {
        hideLoading();
    }
}

// Fetch weather data from OpenWeatherMap API
async function getWeatherData(city) {
    const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=${CONFIG.UNITS}&lang=${CONFIG.LANG}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
        if (response.status === 404) {
            throw new Error('City not found. Please check the spelling and try again.');
        } else if (response.status === 401) {
            throw new Error('Invalid API key. Please check your configuration.');
        } else {
            throw new Error('Failed to fetch weather data. Please try again later.');
        }
    }
    
    return await response.json();
}

// Display weather information
function displayWeather(data) {
    const {
        name,
        main: { temp, humidity, feels_like },
        weather: [{ description, icon }],
        wind: { speed },
        sys: { country }
    } = data;
    
    const weatherHTML = `
        <div class="weather-card">
            <div class="city-name">
                ${name}, ${country}
            </div>
            
            <div class="weather-main">
                <div class="weather-icon">
                    <i class="${weatherIcons[icon] || 'fas fa-cloud'}"></i>
                </div>
                <div>
                    <div class="temperature">${Math.round(temp)}°C</div>
                    <div class="weather-description">${description}</div>
                </div>
            </div>
            
            <div class="weather-details">
                <div class="weather-detail">
                    <i class="fas fa-thermometer-half"></i>
                    <div class="weather-detail-label">Feels Like</div>
                    <div class="weather-detail-value">${Math.round(feels_like)}°C</div>
                </div>
                
                <div class="weather-detail">
                    <i class="fas fa-tint"></i>
                    <div class="weather-detail-label">Humidity</div>
                    <div class="weather-detail-value">${humidity}%</div>
                </div>
                
                <div class="weather-detail">
                    <i class="fas fa-wind"></i>
                    <div class="weather-detail-label">Wind Speed</div>
                    <div class="weather-detail-value">${speed} m/s</div>
                </div>
                
                <div class="weather-detail">
                    <i class="fas fa-map-marker-alt"></i>
                    <div class="weather-detail-label">Location</div>
                    <div class="weather-detail-value">${name}</div>
                </div>
            </div>
        </div>
    `;
    
    weatherContainer.innerHTML = weatherHTML;
    showWeather();
}

// Display error message
function displayError(message) {
    const errorHTML = `
        <div class="error-message">
            <i class="fas fa-exclamation-triangle"></i>
            ${message}
        </div>
    `;
    
    errorContainer.innerHTML = errorHTML;
    showError();
}

// Show/Hide functions
function showLoading() {
    loading.classList.add('show');
}

function hideLoading() {
    loading.classList.remove('show');
}

function showWeather() {
    weatherContainer.classList.add('show');
}

function hideWeather() {
    weatherContainer.classList.remove('show');
}

function showError() {
    errorContainer.classList.add('show');
}

function hideError() {
    errorContainer.classList.remove('show');
}

// Add some interactive features
cityInput.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        searchForm.dispatchEvent(new Event('submit'));
    }
});

// Add click outside to clear error
document.addEventListener('click', function(e) {
    if (!errorContainer.contains(e.target) && !searchForm.contains(e.target)) {
        hideError();
    }
});

// Add smooth scrolling for better UX
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}

// Enhanced error handling with retry functionality
function addRetryButton() {
    const retryButton = document.createElement('button');
    retryButton.innerHTML = '<i class="fas fa-redo"></i> Try Again';
    retryButton.className = 'retry-btn';
    retryButton.onclick = () => {
        hideError();
        searchForm.dispatchEvent(new Event('submit'));
    };
    
    return retryButton;
}

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        hideError();
        cityInput.blur();
    }
});

// Add some helpful tips
const tips = [
    'Try searching for major cities like "London", "New York", or "Tokyo"',
    'Make sure to spell the city name correctly',
    'You can search for cities in different countries',
    'The app shows current weather conditions in real-time'
];

// Display a random tip on page load
window.addEventListener('load', function() {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    console.log('💡 Tip:', randomTip);
});

// Add weather background based on time of day
function updateBackground() {
    const hour = new Date().getHours();
    const body = document.body;
    
    if (hour >= 6 && hour < 18) {
        // Day time
        body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    } else {
        // Night time
        body.style.background = 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)';
    }
}

// Update background on page load
updateBackground(); 