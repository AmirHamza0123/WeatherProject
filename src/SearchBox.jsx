import "./SearchBox.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "5e27565ef7c6be7e5398a925d07bd317";

    let weatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city} 
        &appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city:city,
                temp: jsonResponse.main.temp,
                temp_max: jsonResponse.main.temp_max,
                temp_min: jsonResponse.main.temp_min,
                feels_like: jsonResponse.main.feels_like,
                humidity: jsonResponse.main.humidity,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (err) {

            throw err;

        }

    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await weatherInfo();
            updateInfo(newInfo);
        } catch (err) {
            setError(true);
        }
    };
    let removePara = () => {
        setError((error) => error = false);
    }

    return (
        <div className='SearchBox'>
            {/* <h3>Search For Weather</h3> */}
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange} />
                <br></br>
                <br></br>
                <Button variant="contained" type="submit" onClick={removePara}> Search</Button>
                {/* {error == true ? <p style={{color:"red"}}>City Not Found</p> : error == fals } */}
                {error && (<b><p style={{ color: "red" }}>City Not Found:Please Enter A Valid City</p></b>)}
            </form>
        </div>
    )
}



