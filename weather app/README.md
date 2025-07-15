# 🌤️ Weather App

A beautiful, responsive weather application that displays current weather information for any city using the OpenWeatherMap API.

## ✨ Features

- **Search any city** - Get current weather data for cities worldwide
- **Beautiful UI** - Modern, responsive design with smooth animations
- **Weather icons** - Dynamic weather icons based on current conditions
- **Detailed information** - Temperature, humidity, wind speed, and "feels like" temperature
- **Error handling** - Clear error messages when city is not found
- **Loading states** - Smooth loading animations during API calls
- **Responsive design** - Works perfectly on desktop, tablet, and mobile devices

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- An OpenWeatherMap API key (free)

### Setup Instructions

1. **Get an API Key**
   - Visit [OpenWeatherMap](https://openweathermap.org/)
   - Sign up for a free account
   - Navigate to your API keys section
   - Copy your API key

2. **Configure the App**
   - Open `script.js` in your code editor
   - Replace `'YOUR_API_KEY_HERE'` on line 2 with your actual API key:
   ```javascript
   const API_KEY = '9fc27c90188c4bc0bda3bea4796a31b6';
   ```

3. **Run the Application**
   - Open `index.html` in your web browser
   - Or serve the files using a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with Flexbox, Grid, and animations
- **JavaScript (ES6+)** - Async/await, fetch API, DOM manipulation
- **OpenWeatherMap API** - Weather data provider
- **Font Awesome** - Weather and UI icons
- **Google Fonts** - Inter font family

## 📱 Features Breakdown

### Search Functionality
- Real-time city search with form validation
- Enter key support for quick searches
- Automatic error clearing on new searches

### Weather Display
- **Current temperature** in Celsius
- **Weather description** (e.g., "clear sky", "light rain")
- **Weather icons** that change based on conditions
- **Feels like temperature** for better user experience
- **Humidity percentage** 
- **Wind speed** in meters per second
- **Location details** with city and country

### Error Handling
- City not found errors with helpful suggestions
- API key validation errors
- Network error handling
- User-friendly error messages

### UI/UX Features
- Smooth fade-in animations
- Loading spinner during API calls
- Responsive design for all screen sizes
- Keyboard navigation support (Escape key)
- Click outside to dismiss errors
- Dynamic background based on time of day

## 🎨 Design Features

- **Glassmorphism effect** - Semi-transparent containers with backdrop blur
- **Gradient backgrounds** - Beautiful color transitions
- **Smooth animations** - CSS transitions and keyframe animations
- **Modern typography** - Inter font for clean, readable text
- **Color-coded elements** - Consistent color scheme throughout

## 🔧 Customization

### Changing Units
To display temperature in Fahrenheit, modify the API URL in `script.js`:
```javascript
// Change from metric to imperial
const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=imperial`;
```

### Adding More Weather Data
The OpenWeatherMap API provides additional data like:
- Pressure
- Sunrise/sunset times
- UV index
- Visibility

You can extend the `displayWeather` function to show more information.

### Styling Customization
The app uses CSS custom properties and modern CSS features. You can easily customize:
- Colors in the CSS variables
- Animations and transitions
- Layout and spacing
- Typography and fonts

## 🌐 API Information

This app uses the OpenWeatherMap Current Weather Data API:
- **Endpoint**: `https://api.openweathermap.org/data/2.5/weather`
- **Free tier**: 1,000 calls per day
- **Response format**: JSON
- **Units**: Metric (Celsius, meters/second)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to contribute to this project by:
- Reporting bugs
- Suggesting new features
- Submitting pull requests
- Improving documentation

## 📞 Support

If you encounter any issues:
1. Check that your API key is correctly configured
2. Ensure you have an active internet connection
3. Verify the city name spelling
4. Check the browser console for any error messages

## 🔮 Future Enhancements

Potential features for future versions:
- 5-day weather forecast
- Weather maps integration
- Location-based weather (GPS)
- Weather alerts and notifications
- Multiple unit support (Celsius/Fahrenheit)
- Dark/light theme toggle
- Weather history
- Favorite cities list

---

**Happy Weather Checking! ☀️🌧️❄️** 