import { useEffect, useState } from "react";

const useWeather = function(h_forecast,d_forecast) {
    const [hourlyForecast, setHourlyForecast] = useState(null);
    const [dailyForecast, setDailyForecast] = useState(null);

    useEffect(() => {
        setHourlyForecast(h_forecast);
        setDailyForecast(d_forecast);
    },[]);

    return {hourlyForecast,setHourlyForecast,dailyForecast,setDailyForecast}
}

export default useWeather;