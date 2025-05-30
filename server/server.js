// server/server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config(); // Load environment variables
console.log("API Key:", process.env.OPENWEATHERMAP_API_KEY);
const app = express();
const PORT = 5001;

app.use(cors());





app.get('/api/weather', async (req, res) => {
  const city = req.query.city;

  try {
    console.log(`${req.query.city}`)
    console.log(`${process.env.WEATHERAPI_KEY}`)
    const weatherResponse = await axios.get('http://api.weatherapi.com/v1/current.json', {
      params: {
        key: process.env.OPENWEATHERMAP_API_KEY,  // Use your actual environment variable name
        q: city,
        aqi: 'no'
      }
    });
    
    console.log('Weather data fetched successfully:', weatherResponse.data);
    res.json(weatherResponse.data);
  } catch (error) {
    console.error('Weather API error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
