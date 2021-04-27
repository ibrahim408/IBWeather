import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import {TYPE_HOURLY,TYPE_GRID,TYPE_DAILY} from '../helper/constants'

const useWeather = function(geolocation,gridPoint,setGridPoint) {
    const [hourlyForecast, setHourlyForecast] = useState(null);
    const [dailyForecast, setDailyForecast] = useState(null);
   
    const responseGrid = useFetch(TYPE_GRID,geolocation);
    const responseHourlyForecast = useFetch(TYPE_HOURLY,gridPoint);
    const responseDailyForecast = useFetch(TYPE_DAILY,gridPoint)
   
    useEffect(() => {
        if (responseHourlyForecast.result){
            setHourlyForecast(responseHourlyForecast.result);
        }
    },[responseHourlyForecast.result]);

    useEffect(() => {
        if (responseHourlyForecast.result){
            setDailyForecast(responseDailyForecast.result);         
        }
    },[responseDailyForecast.result]);

    useEffect(() => {
        if (responseGrid.loading === false && responseGrid.error === null){
            if (responseGrid.result && responseGrid.result[0] && responseGrid.result[1]){
                setGridPoint(responseGrid.result);
            }
        }
    },[responseGrid.loading])

    return {hourlyForecast,dailyForecast};
}

export default useWeather;