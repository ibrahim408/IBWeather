import  "./Forecast.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'

function Forecast(props) {
    const {periods} = props.forecast || {forecast: []};
    // console.log('hourly: ',periods);
    const renderPeriod = ({temperature,shortForecast,period}) => {
        return (
            <div className='forecast-container'>  
                <p className="item-temperature">{temperature} F</p>
                <FontAwesomeIcon style={{fontSize: 50, color: 'grey'}} icon={faSun} />
                <p className="item-time">{period}</p>
            </div>
        )
    }
    return (
        <div>
            {periods && periods.map(period => {
                return renderPeriod(period);
            })}
        </div>
    );
}


// {<ul> 
//     {
//     numbers.map(number => {
//         return renderItem(number)
//     })
// }  
// </ul>} 

{/* <div className="list-container">
</div>  */}


export default Forecast









 