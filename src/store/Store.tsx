import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import {UserReducer} from 'store/reducers/UserReducer';
import {IUserTypes} from 'store/actions/UserTypes';
import { WeatherReducer, IInitialState} from 'store/WeatherStations/weatherStations.reducer';

export interface IAppState {
    userState: IUserTypes,
    weather: IInitialState,
}

const rootReducer = combineReducers<IAppState>({
    userState: UserReducer,
    weather: WeatherReducer
});

export default function configureStore(): Store<IAppState, any> {
    const store = createStore(rootReducer,undefined,applyMiddleware(thunk));
    return store;
} 
