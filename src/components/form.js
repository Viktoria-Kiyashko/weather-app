

import React, { useState } from "react";
import cities from "./cities"; 

function Form({ weatherMethod }) {
    const [selectedCity, setSelectedCity] = useState("");

    const handleSelectChange = (event) => {
        setSelectedCity(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedCity) {
            weatherMethod(selectedCity); 
        } else {
            alert("Пожалуйста, выберите город.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="city-select">Выберите город:</label>
            <select id="city-select" value={selectedCity} onChange={handleSelectChange}>
                <option value="">Ваш город</option>
                {cities.map((city) => (
                    <option key={city.name} value={city.name}>
                        {city.name}
                    </option>
                ))}
            </select>
            <button type="submit">Получить погоду</button>
        </form>
    );
}

export default Form;



