import  "./Forecast.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faCloud } from '@fortawesome/free-solid-svg-icons'

function Forecast(props) {
    const {loading} = props.response;
    const {periods} = props.forecast || {forecast: []};
    console.log('sir loading: ',loading);
    console.log('sir periods: ',periods);
    
    const renderPeriods = () => {
        return (
            <div>
                {periods.map(period => {
                    return renderPeriod(period);
                })}
            </div>
        )
    }
    const renderPeriod = ({temperature,shortForecast,period}) => {
        return (
            <div className='forecast-container'>  
                <p className="item-temperature">{temperature} F</p>
                <FontAwesomeIcon style={{fontSize: 50, color: 'grey'}} icon={faSun} />
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
    const styleBorderColor = 'white';
    const styleBorderTopColor = '#9999ff';
    
    const renderLoading = () => {
        return(
            <div className="spinnerContainer">
                <div className="loading-spinner" style={{borderColor: styleBorderColor ,borderTopColor: styleBorderTopColor}}></div>
            </div>
        )     
    }


    if (loading){  return renderLoading();
    } else if (periods){    return renderPeriods(); 
    } else {   return renderDefault();}
}

export default Forecast









 