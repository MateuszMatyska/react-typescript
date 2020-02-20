import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { IWeatherType } from 'types/IWeatherType';
import { IGetWeather, IDeleteWeather } from './weatherStations.reducer';
import { getData } from './weatherStations.api';

export enum WeatherActionTypes {
    GET_WEATHER = "GET_WEATHER",
    DELETE_WEATHER = "DELETE_WEATHER",
}

export const GetWeather: ActionCreator<ThunkAction<
    Promise<any>,
    IWeatherType,
    null,
    IGetWeather
>> = () => {
    return async (dispatch: Dispatch) => {
        const weathers: IWeatherType[] = await getData() as IWeatherType[];
        dispatch({
            type: WeatherActionTypes.GET_WEATHER,
            payload: weathers
        });
    };
};

export const DeleteWeather: ActionCreator<ThunkAction<
    Promise<any>,
    IWeatherType,
    null,
    IDeleteWeather
>> = (id: number) => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: WeatherActionTypes.DELETE_WEATHER,
            payload: id
        });
    };
};

