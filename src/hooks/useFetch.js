import {useState, useEffect} from 'react';
import {createRequest} from '../helper/createRequest';
import parseResponse from '../helper/parseResponse'


const useFetch = (type,args) => {
    const [result,setResult] = useState(null);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        async function fetchData(){
            try {
                setLoading(true);
                const request = createRequest(type,args);
                console.log('sir ')
                console.log('sir ')
                console.log('fetching ', request);
                const res = await fetch(request);
                const response = await res.json();
                const data = parseResponse(type,response);
                setResult(data);
            } catch(err){
                console.log('error: ',err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        

        if (args[0]) fetchData();

    }, [args[0],args[1]])


    return {result,error,loading};
};

export default useFetch;

// if (response.status === "OK"){
//     const address = results[0].formatted_address;
// }




// get Grid
// https://api.weather.gov/points/37.423021,-122.083739
// https://api.weather.gov/points/{latitude},{longitude}
// properties.gridX: 92 
// properties.gridY: 86



// 7 Day
// https://api.weather.gov/gridpoints/TOP/92,8/forecast
// https://api.weather.gov/gridpoints/TOP/{gridX},{gridY}/forecast 


// Today 
// https://api.weather.gov/gridpoints/TOP/31,80/forecast/hourly
// https://api.weather.gov/gridpoints/TOP/31,80/forecast/hourly