import { weatherDataMap } from './weatherStation.mapper';

export const getData = () => {
    return new Promise((resolve, reject) => {
    fetch('https://danepubliczne.imgw.pl/api/data/synop')
    .then((response) => {
        return response.json();
    })
    .then((json) => {
         resolve(weatherDataMap(json));
    })
    .catch((error) => {reject(error)});
})}
