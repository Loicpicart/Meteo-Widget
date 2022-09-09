import PropTypes from 'prop-types';
import axios from 'axios';
import './MeteoWidget.scss';
import { useEffect, useState } from 'react';

function MeteoWidget({ city, code }) {
    /*
    https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}
    */

    const [temperature, setTemperature] = useState(null);
    const [icon, setIcon] = useState(null);

    useEffect(() => {
        const API_KEY = process.env.REACT_APP_API_KEY;
        axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${code},fr&appid=${API_KEY}&units=metric`)
        .then((res) => {
            console.log(res.data.main.temp);
            setTemperature(res.data.main.temp);
            setIcon(res.data.weather[0].icon);
        });
    }, []);

    return (
        <div className="meteo">
            <div className="meteo__container">
            <div className="meteo--city">{city}</div>
            <div className="meteo--code">{code}</div>
            <div className="meteo--temperature">{Math.round(temperature)}°C</div>
            </div>
            {icon && <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />}
        </div>
    )
};

MeteoWidget.propTypes = {
    city: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
}

export default MeteoWidget;