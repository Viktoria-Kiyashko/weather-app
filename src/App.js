

import React, { useState } from "react";
import Form from "./components/form";
import Weather from "./components/Weather";
import Info from "./components/info";
import cities from "./components/cities"
import './App.css'; // Импорт стилей

class App extends React.Component {
  state = {
      selectedCity: null,
      weatherData: null,
  };

  fetchWeatherData = async (cityName) => {
      const city = cities.find((c) => c.name.toLowerCase() === cityName.toLowerCase());
      if (!city) {
          alert("Город не найден.");
          return;
      }

      try {
          const response = await fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current=apparent_temperature,precipitation,rain,surface_pressure,wind_speed_10m&temporal_resolution=native`
          );
          const data = await response.json();

          
          this.setState({
              selectedCity: city,
              weatherData: {
                  temp: data.current?.apparent_temperature, // Полная температура
                  surfacePressure: data.current?.surface_pressure, // Поверхностное давление
                  windSpeed: data.current?.wind_speed_10m, // Скорость ветра
              },
          });
      } catch (error) {
          console.error("Ошибка при получении данных о погоде:", error);
      }
  };

  handleCityChange = (cityName) => {
     
      this.fetchWeatherData(cityName);
  };

  render() {
      return (
          <div className="container">
              <Info />
              <Form weatherMethod={this.handleCityChange} />
              {this.state.weatherData && (
                  <Weather weatherData={this.state.weatherData} city={this.state.selectedCity} />
              )}
          </div>
      );
  }
}

export default App;


