import useCurrentLocation from '../../hooks/useCurrentLocation'
import useWeather from "../../hooks/useWeather";
import useFavorite from "../../hooks/useFavorite";
import useInput from "../../hooks/useInput";
import Favorite from '../Favorite'
import Weather from "../Weather";
import Forecast from "../Forecast/";
import './Home.css'
import './Toolbar.css'

function Home(){
    const {locationName,geolocation,gridPoint,setZipCode,setLocationName,setGridPoint} = useCurrentLocation();
    const {hourlyForecast,dailyForecast,responseHourlyForecast,responseDailyForecast} =  useWeather(geolocation,gridPoint,setGridPoint);
    const {favorites, setFavorites} = useFavorite();
    const {searchInput,tab,onClickTab,onChange,onSubmit,onSave,} = useInput(setFavorites,setZipCode,gridPoint,favorites,locationName);

    const renderTab = (type,typeText) => {
        return (
            <div style={{backgroundColor: tab === type ? '#99ccff' : null}} 
                className="tab-box"
                onClick={() => onClickTab(type)}
            >
                <h3>{typeText}</h3>
            </div>          
        )
    }

    return(
        <div className="main-container">
            <div className="toolbar-container">
                <input  className="input-container" placeholder="Enter zip code" value={searchInput} onChange={onChange}/>
                <div className="search-container" onClick={onSubmit}>search</div>
                <div className="save-container" onClick={onSave}>save zipcode</div>
            </div>
            <div className="detail-container">
                <div className="tabs-container">
                    {renderTab('hourly','Hourly')}
                    {renderTab('daily','Daily')}
                    {renderTab('favorites','Favorites')}
                </div>
                <div className="detail-body-container">
                    <Weather locationName={locationName} hourlyForecast={hourlyForecast} />
                </div>
            </div>
            {tab === 'hourly' ? <Forecast forecast={hourlyForecast} response={responseHourlyForecast} /> : null}
            {tab === 'daily' ? <Forecast forecast={dailyForecast} response={responseDailyForecast} /> : null}
            {tab === 'favorites' ? 
                <Favorite favorites={favorites} setLocationName={setLocationName} setGridPoint={setGridPoint} />
            : null}
        </div>
    )
}


export default Home;


