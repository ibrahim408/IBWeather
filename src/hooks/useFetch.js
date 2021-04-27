import {useState, useEffect} from 'react';
import {createRequest} from '../helper/createRequest';
import parseResponse from '../helper/parseResponse'

const useFetch = (type,args) => {
    const [result,setResult] = useState(null);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        async function fetchData(){
            try {
                setLoading(true);
                const request = createRequest(type,args);
                const res = await fetch(request);
                const response = await res.json();
                const data = parseResponse(type,response);
                setResult(data);
            } catch(err){
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









