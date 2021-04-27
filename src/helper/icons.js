import { faSun, faCloudSun, faCloud, faCloudSunRain, faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons'

const shortForecast = {
    'Clear': faSun,
    'Mostly Clear': faCloud,
    'Sunny': faSun,
    'Mostly Sunny': faSun,
    'Partly Sunny': faSun,
    'Patchy Fog then Mostly Sunny': faCloudSun,
    'Patchy Fog then Partly Sunny': faCloudSun,
    'Partly Cloudy': faCloudSun,
    'Mostly Cloudy': faCloudSun,
    'Snow Likely': faCloud,
    'Chance Snow then Mostly Sunny': faCloud,
    'Patchy Fog': faCloud,
    'Patchy Fog then Sunny': faCloud,
    'Chance Showers And Thunderstorms': faCloud,
    'Chance Rain And Snow': faCloudSunRain,
    'Slight Chance Rain Showers then Slight Chance Showers And Thunderstorms': faCloudSunRain,
    'Slight Chance Rain Showers then Mostly Sunny': faCloudSunRain,
    'Partly Sunny then Chance Showers And Thunderstorms': faCloudSunRain,
    'Chance Rain Showers': faCloudSunRain,
    'Slight Chance Rain Showers': faCloudSunRain,
    'Rain Showers': faCloudShowersHeavy,
    'Showers And Thunderstorms': faCloudShowersHeavy
}
export function getIcon(str) {
    if (shortForecast[str]){
        return shortForecast[str]
    } else {
        console.log('add missing shortForecast', str);
        return faSun
    }
}

