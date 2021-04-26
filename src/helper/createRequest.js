import {TYPE_GRID, TYPE_DAILY, TYPE_HOURLY, TYPE_GEOLOCATION} from './constants';

const BASE_URL = 'https://api.weather.gov';
const GEO_URL = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

export const createRequest = function (type,args){
    switch(type){
        case TYPE_GRID:{
            return `${BASE_URL}/points/${args[0]},${args[1]}`;
        }
        case TYPE_DAILY: {
            return `${BASE_URL}/gridpoints/${args[0]}/${args[1]},${args[2]}/forecast`;
        }
        case TYPE_HOURLY: {
            return `${BASE_URL}/gridpoints/${args[0]}/${args[1]},${args[2]}/forecast/hourly`;
        }
        case TYPE_GEOLOCATION: {
            return `${GEO_URL}${args[0]}&key=AIzaSyD8RBTu-q-EVrO28tXVyUQMXzZYr_Hb2RQ`;
        }
    }
};

//https://maps.googleapis.com/maps/api/geocode/json?address=${args[0]}&key=AIzaSyD8RBTu-q-EVrO28tXVyUQMXzZYr_Hb2RQ

// https://api.weather.gov/gridpoints/TOP/{gridX},{gridY}/forecast 
//https://maps.googleapis.com/maps/api/geocode/json?address=california&key=AIzaSyD8RBTu-q-EVrO28tXVyUQMXzZYr_Hb2RQ
