import  "./Forecast.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { getIcon } from "../../helper/icons";
function Forecast(props) {
    const {loading} = props.response;
    const {periods} = props.forecast || {forecast: []};

    const renderPeriods = () => {
        return (
            <div>
                {periods.map((period,index) => {
                    return renderPeriod(period,index);
                })}
            </div>
        )
    }
    
    const renderPeriod = ({temperature,shortForecast,period},index) => {
        return (
            <div key={index.toString()} className='forecast-container'>  
                <p className="item-temperature">{temperature} F</p>
                <FontAwesomeIcon style={{fontSize: 50, color: 'grey'}} icon={getIcon(shortForecast)} />
                <p className="item-time">{period}</p>
            </div>
        )
    }

    const renderDefault = () => {
        return (
            <div className="default-container">
                <FontAwesomeIcon style={{fontSize: 150, color: 'grey'}} icon={faCloud} />
            </div>
        )      
    }

    const renderLoading = () => {
        return(
            <div className="spinnerContainer">
                <div className="loading-spinner" style={{borderColor: 'white' ,borderTopColor: '#9999ff'}}></div>
            </div>
        )     
    }


    if (loading){  return renderLoading();
    } else if (periods){    return renderPeriods(); 
    } else {   return renderDefault();}
}

export default Forecast









 