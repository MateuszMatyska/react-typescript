import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {IAppState} from 'store/Store';
import {GetWeather} from 'store/WeatherStations/weatherStations.action';
import { IWeatherType } from 'types/IWeatherType';
import TableRow from 'pages/WeatherPage/WeatherTable/components/TableRow';
import './style.css';

const WeatherTable: React.FC<any> = (props: any) => {

    useEffect(() => {
        props.GetWeatherAction();
    }, [props])

    const mapWeather = () => {
        if(props.weatherData) {
            return props.weatherData.map((item: IWeatherType) => {
                return <TableRow item={item} />
            }) 
        }
    }  

  return (
    <table className="weatherTable__table" >
      <thead>
        <tr className="weatherTable__table--head">
          <th>Id.</th>
          <th>Station</th>
          <th>Measure Date</th>
          <th>Measure Hour</th>
          <th>Temperature</th>
          <th>Wind Speed</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody className="weatherTable__table--body">
        {mapWeather()}
      </tbody>
    </table>
  );
};

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

export default connect(mapStateToPros, mapDispatchToProps)(WeatherTable);
