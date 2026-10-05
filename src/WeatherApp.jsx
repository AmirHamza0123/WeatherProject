import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox.jsx";
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState(
        {
            city: "delhi",
            feels_like: 32.02,
            temp: 28.92,
            temp_max: 28.92,
            temp_min: 28.92,
            humidity: 67,
            weather: "light rain",
        });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)
    };

    return (
        <div>
            <h3>Search for Weather</h3>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox weatherInfo={weatherInfo} />
        </div>
    )
}