import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import {IAppState} from 'store/Store';
import {GetWeather, DeleteWeather, EditWeather} from 'store/WeatherStations/weatherStations.action';
import { IWeatherType } from 'types/IWeatherType';
import TableRow from 'pages/WeatherPage/WeatherTable/components/TableRow';
import Modal from 'components/Modal/Modal';
import './style.css';
import Input from 'components/Input/Input';

const WeatherTable: React.FC<any> = (props: any) => {
    const [visible, setVisible] = useState(false);
    const [weather, setWeather] = useState({} as IWeatherType);

    useEffect(() => {
        props.GetWeatherAction();
    }, []);

    const mapWeather = () => {
        if(props.weatherData) {
            return props.weatherData.map((item: IWeatherType) => {
                return <TableRow item={item} deleteAction={deleteItem} editAction={getEditedWeather} />
            }) 
        }
    }  

  const deleteItem = (id: number) => {
    props.DeleteWeatherAction(id);
  }
  
  const cancelModal = () => {
    setVisible(false);
  }

  const getEditedWeather = (item: IWeatherType) => {
    setWeather(item);
    setVisible(true);
  }

  const editWeather = () => {
    props.editWeatherAction(weather);
    setVisible(false);
  }

  const changeWeatherValue = (name: string, event: any) => {
    setWeather({
      ...weather,
      [name]: event.target.value
    } as IWeatherType);
  }
    
  return (
    <>
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
    <Modal title="Edit Weather" visible={visible} onSubmit={() => {editWeather()}} onClose={() => { cancelModal()}}>
      <Input placeholder="Station" type="text" value={weather.station} onChange={(e: any) => changeWeatherValue('station',e)} />
      <Input placeholder="Measure Date" type="text" value={weather.measureDate} onChange={(e: any) => changeWeatherValue('measureDate',e)} />
      <Input placeholder="Measure Hour" type="text" value={weather.measureHour} onChange={(e: any) => changeWeatherValue('measureHour',e)} />
      <Input placeholder="Temperature" type="text" value={weather.temperature} onChange={(e: any) => changeWeatherValue('temperature',e)} />
      <Input placeholder="Wind Speed" type="text" value={weather.windSpeed} onChange={(e: any) => changeWeatherValue('windSpeed',e)} />
    </Modal>
    </>
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
        DeleteWeatherAction: (id: number) => dispatch(DeleteWeather(id)),
        editWeatherAction: (item: IWeatherType) => dispatch(EditWeather(item))
    }
}

export default connect(mapStateToPros, mapDispatchToProps)(WeatherTable);
