


import React from "react";

const Weather = ({ weatherData, city }) => {
    return (
        <div>
            <h2>Погода в {city?.name}</h2>
            <p>Температура: {weatherData.temp}°C</p>
            <p>Поверхностное давление: {weatherData.surfacePressure} hPa</p>
            <p>Скорость ветра: {weatherData.windSpeed} км/ч</p>
        </div>
    );
};

export default Weather;



