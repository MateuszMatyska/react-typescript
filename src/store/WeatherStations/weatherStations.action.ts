import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { IWeatherType } from 'types/IWeatherType';
import { IGetWeather } from './weatherStations.reducer';
import { getData } from './weatherStations.api';

export enum WeatherActionTypes {
    GET_WEATHER = "GET_WEATHER"
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