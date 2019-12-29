import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import {UserReducer} from 'store/reducers/UserReducer';
import {IUserTypes} from 'store/actions/UserTypes';

export interface IAppState {
    userState: IUserTypes,
}

const rootReducer = combineReducers<IAppState>({
    userState: UserReducer,
});

export default function configureStore(): Store<IAppState, any> {
    const store = createStore(rootReducer,undefined,applyMiddleware(thunk));
    return store;
} 
