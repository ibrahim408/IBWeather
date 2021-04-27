import  "./Weather.css";

function Weather(props) {
    const {locationName,hourlyForecast} = props;
    const {currentTemperature,highTemperature,lowTemperature} = hourlyForecast || {};

    return (
        <div className='weather-container'>
            <div className="today-info-container">
                <div className="location-container">
                    <h1 className="header-one">{currentTemperature} F</h1>
                    <p>{locationName}</p>
                </div>
                <div className="low-high-container">
                    <h1>High {highTemperature} F</h1>
                    <h1>Low{lowTemperature} F</h1>
                </div>
            </div>
        </div>
    );
}


export default Weather









 