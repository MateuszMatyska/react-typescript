import { IWeatherType } from 'types/IWeatherType';

export const weatherDataMap = (data: any) => {
    if (data) {
        let dateArray: IWeatherType[];
        dateArray = data.map((item: any) => {
            return {
                id: item.id_stacji,
                station: item.stacja,
                measureDate: item.data_pomiaru,
                measureHour: item.godzina_pomiaru,
                temperature: item.temperatura,
                windSpeed: item.predkosc_wiatru
            } as IWeatherType
        });

        return dateArray;
    }
    return null;
}