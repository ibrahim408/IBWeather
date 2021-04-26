import {useState} from 'react'
import useCurrentLocation from '../../hooks/useCurrentLocation'
import useFavorite from "../../hooks/useFavorite";
import Favorite from '../Favorite'
import Weather from "../Weather";
import Forecast from "../Forecast/";
import Daily from '../Daily'
import Hourly from '../Hourly/'
import {isZipCode} from '../../helper/utility'
import './Home.css'
import './Toolbar.css'

function Home(){
    const {locationName,gridPoint,hourlyForecast,dailyForecast,setZipCode,setLocationName,setGridPoint} = useCurrentLocation();
    const {favorites, setFavorites} = useFavorite();
    const [searchInput,setSearchInput] = useState('');
    const [tab,setTab] = useState('hourly');


    const onChange = (event) => {
        setSearchInput(event.target.value)
    }
    const onSubmit = () => {
        if (isZipCode(searchInput)){
            setZipCode([searchInput,searchInput]);
        }
    };
    
    const onSave = () => {
        if (gridPoint[0] && gridPoint[1] && gridPoint[2]){
            if (!favorites.some(favorite => favorite.locationName === locationName)){
                setFavorites(favorites.concat({locationName,gridPoint}))
            };
        } else {
            console.log('no data save sir');
        }
    };

    const onClickTab = (tb) => {
        setTab(tb);
    };

    const renderTab = (type,typeText) => {
        return (
            <div style={{backgroundColor: tab === type ? '#d0deec' : null}} 
                className="tab-box"
                onClick={() => onClickTab(type)}
            >
                <h3>{typeText}</h3>
            </div>          
        )
    }

    // console.log('hourlyForecast',hourlyForecast);
    // console.log('dailyForecast: ',dailyForecast);
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
            {tab === 'hourly' ? <Forecast forecast={hourlyForecast} /> : null}
            {tab === 'daily' ? <Forecast forecast={dailyForecast} /> : null}
            {tab === 'favorites' ? 
                <Favorite favorites={favorites} setLocationName={setLocationName} setGridPoint={setGridPoint} />
            : null}

        </div>
    )
}




export default Home;




// console.log('locationName: ',locationName);
// console.log('hourlyForecast: ',hourlyForecast);
// console.log('dailyForecast: ',dailyForecast);
// console.log('gridPoint: ',gridPoint);
// console.log('favorites: ',favorites);
// console.log('');



//                <h1>{locationName}</h1>


//<Favorite favorites={favorites} setLocationName={setLocationName} setGridPoint={setGridPoint} />
{/* <Daily />
<Hourly /> */}

// HOOKS
//
//
//const {geolocation,setGeolocation,gridPoint,setGridPoint} = useCurrentLocation();
//const fetchGridPoint = useFetch(TYPE_GRID,[37.423021,-122.083739]);
//const fetchToday = useFetch(TYPE_TODAY,[31,80]);
//const fetchSeven  = useFetch(TYPE_SEVEN_DAY,[31,90]);

//
// google api
  //const fetchGeolocation = useFetch(TYPE_GEOLOCATION,['00000','00000']);  
  //console.log('fetchGeolocation: ', fetchGeolocation);




//
//
// FAVORITES
    // const {favorites,setFavorites} = useFavorite();
    // console.log('favorites: ', favorites);
    // if (favorites.length === 1)
    //     setFavorites(favorites.concat(1));


//
//
// HOURLy
// must end with the first start date
// useEffect(() => {
//     if (fetchToday.loading === false && fetchToday.error === null){
//         console.log('today forcast: ', fetchToday);

//         const hours = fetchToday.result.properties.periods;
//         hours.forEach(hour => {
//             const currentTime = new Date(hour.startTime)
//             console.log('date: ', currentTime.getDate())
//             console.log('hour: ', currentTime.getHours())
//             console.log('=========================')
//         })
//     }
// },[fetchToday.loading])



//
//
// USING location to get grid points
//const fetchGridPoint = useFetch(`https://api.weather.gov/points/${geolocation[0]},${geolocation[1]}`);

// //enter wrong url handle error
// useEffect(() => {
//     //console.log('useEffect: ', fetchGridPoint);
//     if (fetchGridPoint.loading === false && fetchGridPoint.error === null){
//         console.log('fetchGridPoint: ',fetchGridPoint);
//         // const gridX = fetchGridPoint.result.properties.gridX;
//         // const gridY = fetchGridPoint.result.properties.gridY;
//         //setGridPoint([gridX,gridY]);
//     } else if (fetchGridPoint.error === true) {
//         console.log('sirr error');
//         console.log('sirr error');
//         console.log('sirr error');      
//     }
// }, [fetchGridPoint.loading]);



