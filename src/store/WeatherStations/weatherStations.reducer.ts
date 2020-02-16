import { Reducer } from 'redux';
import { IWeatherType } from 'types/IWeatherType';
import { WeatherActionTypes } from './weatherStations.action';

export interface IGetWeather {
    type: WeatherActionTypes.GET_WEATHER,
    payload: IWeatherType[]
}

type WeatherActions = IGetWeather;

export interface IInitialState {
    weatherData: IWeatherType [],
    loading: boolean,
    error: boolean
}

const initialState: IInitialState = {
    weatherData: [],
    loading: false,
    error: false
}

export const WeatherReducer: Reducer<IInitialState, WeatherActions> = (state = initialState, action) => {
    switch(action.type) {
        case WeatherActionTypes.GET_WEATHER: {
            return {
                ...state,
                weatherData: action.payload
            }
        }
        default: {
            return state
        }
    }
}