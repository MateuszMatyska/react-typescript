import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import {IAppState} from 'store/Store';
import {GetWeather, DeleteWeather} from 'store/WeatherStations/weatherStations.action';
import { IWeatherType } from 'types/IWeatherType';
import TableRow from 'pages/WeatherPage/WeatherTable/components/TableRow';
import Modal from 'components/Modal/Modal';
import './style.css';
import Button from 'components/Button/Button';

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
    setVisible(false);
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
      <p>Modal body</p>
      <p>{weather.id}</p>
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
        DeleteWeatherAction: (id: number) => dispatch(DeleteWeather(id))
    }
}

export default connect(mapStateToPros, mapDispatchToProps)(WeatherTable);
