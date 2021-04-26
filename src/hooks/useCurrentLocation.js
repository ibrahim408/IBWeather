import {useEffect, useState} from 'react';
import useFetch from "./useFetch";
import {TYPE_HOURLY,TYPE_GRID,TYPE_GEOLOCATION, TYPE_DAILY} from '../helper/constants'


const useCurrentLocation = function(){
    const [zipCode,setZipCode] = useState([null,null]);
    const [geolocation,setGeolocation] = useState([37.423021,-122.083739]);
    const [locationName,setLocationName] = useState('San Jose CA');
    // const [geolocation,setGeolocation] = useState([null,null]);
    // const [locationName,setLocationName] = useState('');
    const [gridPoint,setGridPoint] = useState([null,null,null]);
    const [hourlyForecast, setHourlyForecast] = useState(null);
    const [dailyForecast, setDailyForecast] = useState(null);
    //const responseGeolocation = useFetch(TYPE_GEOLOCATION,zipCode);
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

    // useEffect(() => {
    //     if (responseGeolocation.loading === false && responseGeolocation.error === null){
    //         if (responseGeolocation.result.lat && responseGeolocation.result.lng){
    //             setLocationName(responseGeolocation.result.location);
    //             setGeolocation([responseGeolocation.result.lat,responseGeolocation.result.lng])
    //         }
    //     }
    //     if (responseGeolocation.error){
    //         console.log('responseGeolocation ERROR')
    //     }
    // },[responseGeolocation.loading])


    return {locationName,hourlyForecast,dailyForecast,gridPoint,setZipCode,setLocationName,setGridPoint};
};

export default useCurrentLocation;