import { Reducer } from 'redux';
import { IWeatherType } from 'types/IWeatherType';
import { WeatherActionTypes } from './weatherStations.action';

export interface IGetWeather {
    type: WeatherActionTypes.GET_WEATHER,
    payload: IWeatherType[]
}

export interface IDeleteWeather {
    type: WeatherActionTypes.DELETE_WEATHER,
    payload: number
}

type WeatherActions = IGetWeather | IDeleteWeather;

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
        case WeatherActionTypes.DELETE_WEATHER: {
            const id = action.payload;
            let localWeather: IWeatherType[] = state.weatherData.filter((item,key) => item.id !== id);

            return {
                ...state,
                weatherData: localWeather
            }
        }
        default: {
            return state
        }
    }
}