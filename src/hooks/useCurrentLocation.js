import {useEffect, useState} from 'react';
import useFetch from "./useFetch";
import {TYPE_GEOLOCATION} from '../helper/constants'

const useCurrentLocation = function(){
    const [locationName,setLocationName] = useState(''); 
    const [zipCode,setZipCode] = useState([null,null]);
    const [geolocation,setGeolocation] = useState([null,null]);
    const [gridPoint,setGridPoint] = useState([null,null,null]);    
    const responseGeolocation = useFetch(TYPE_GEOLOCATION,zipCode);


    useEffect(() => {
        if (responseGeolocation.loading === false && responseGeolocation.error === null && responseGeolocation.result){
            if (responseGeolocation.result.lat && responseGeolocation.result.lng){
                setLocationName(responseGeolocation.result.location);
                setGeolocation([responseGeolocation.result.lat,responseGeolocation.result.lng])
            }
        }
        if (responseGeolocation.error){
            console.log('responseGeolocation ERROR')
        }
    },[responseGeolocation.loading])


    return {locationName,geolocation,gridPoint,setZipCode,setLocationName,setGridPoint};
};

export default useCurrentLocation;