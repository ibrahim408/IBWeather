import {TYPE_GRID, TYPE_DAILY, TYPE_HOURLY, TYPE_GEOLOCATION} from './constants';

const parseResponse = function(type,response){
    switch(type){
        case TYPE_GRID:{
            return parseGrid(response);
        }
        case TYPE_DAILY: {
            return parseDaily(response);
        }
        case TYPE_HOURLY: {
            return parseHourly(response);
        }
        case TYPE_GEOLOCATION: {
            return parseGeolocation(response);
        }
    }
};

function parseGeolocation(response) {
    const data = {};
    if (response.status === "OK"){
        data.location = getLocation(response.results[0].formatted_address);
        data.lat = response.results[0].geometry.location.lat;
        data.lng = response.results[0].geometry.location.lng;
        
        return data;
    } else {
        return null
    }
}

function getLocation(str) {
    let word = str.split(',');
    switch(word.length){
        case 4: {
            return word[1] + ' ' + word[2];
        }
        case 3:
        case 2: {
            return word[0] + ' ' + word[1];
        }
        case 1: {
            return word[0];
        }
        default: {
            return str;
        }
    }
}


function parseGrid(response) {

    const check = response.properties?.gridX;

    if (check){
        const data = [];
        data[0] = response.properties.gridId;
        data[1] = response.properties.gridX;
        data[2] = response.properties.gridY;
        return data;
    } else {
        return null;
    }
}

function parseDaily(response) {
    const check = response.properties?.periods;

    if (check){
        const data = [];
        for (let i = 0; i < response.properties.periods.length; i++){
            if (data.length === 7) break;
            const obj = {
                temperature: response.properties.periods[i].temperature,
                shortForecast: response.properties.periods[i].shortForecast,
                period:  getDate(response.properties.periods[i].startTime)
            }
            if (!data.some(dt => dt.period === obj.period)){
                data.push(obj);
            };
        }
        return {periods: data};
    } else {
        return null;
    }

}

function parseHourly(response) {
    const check = response.properties?.periods;

    if (check){
        const data = {
            periods: [],
            currentTemperature: null,
            currentShortForecast: null,
            highTemperature: null,
            lowTemperature: null
        }

        for (let i = 0; i < response.properties.periods.length; i++){
            if (i === 24) break;

            const {temperature,shortForecast,startTime} = response.properties.periods[i];

            const obj = {
                temperature: temperature,
                shortForecast: shortForecast,
                period:  getHour(startTime) 
            };

            if (i === 1) {
                data.currentTemperature = temperature;
                data.currentShortForecast = shortForecast;
            }
                
                data.highTemperature = temperature > data.highTemperature ? temperature : data.highTemperature;
                data.lowTemperature =   !data.lowTemperature ? temperature : 
                           temperature < data.lowTemperature ? temperature : data.lowTemperature;

            data.periods.push(obj);
        }

        return data;
    } else {
        return null;
    }
}


function getDate(date) {
    var today = new Date(date);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    
    today = mm + '-' + dd + '-' + yyyy;

    return today
}

function getHour(str) {
    var date = new Date(str)
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }


export default parseResponse;

