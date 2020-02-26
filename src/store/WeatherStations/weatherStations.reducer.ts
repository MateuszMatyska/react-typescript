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

export interface IEditWeather {
    type: WeatherActionTypes.EDIT_WEATHER,
    payload: IWeatherType
}

type WeatherActions = IGetWeather | IDeleteWeather | IEditWeather;

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
        case WeatherActionTypes.EDIT_WEATHER: {
            const item = action.payload;
            
            let localWeather: IWeatherType[] = state.weatherData;
            const idx = localWeather.findIndex((i) => i.id === item.id);
            
            localWeather[idx].station = item.station;
            localWeather[idx].measureDate = item.measureDate;
            localWeather[idx].measureHour = item.measureHour;
            localWeather[idx].temperature = item.temperature;
            localWeather[idx].windSpeed = item.windSpeed;

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