import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {IAppState} from 'store/Store';
import {GetWeather} from 'store/WeatherStations/weatherStations.action';
import { IWeatherType } from 'types/IWeatherType';

const WeatherComponent: React.FC<any> = (props: any) => {
    
    useEffect(() => {
        props.GetWeatherAction();
    }, [props])

    const mapWeather = () => {
        if(props.weatherData) {
            return props.weatherData.map((item: IWeatherType) => {
                return <li>
                    <p>{`${item.id} ${item.station} ${item.measureDate} ${item.measureHour} ${item.temperature} ${item.windSpeed}`}</p>
                </li>
            }) 
        }
    }
    
    return <div>
        <ul>
            {mapWeather()}
        </ul>
    </div>
}

const mapStateToPros = (store: IAppState) => {
    return {
        weatherData: store.weather.weatherData,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        GetWeatherAction: () => dispatch(GetWeather()),
    }
}

export default connect(mapStateToPros, mapDispatchToProps)(WeatherComponent);