import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import {IUser, UserReducer} from 'store/reducers/UserReducer';

export interface IAppState {
    userState: IUser,
}

const rootReducer = combineReducers<IAppState>({
    userState: UserReducer,
});

export default function configureStore(): Store<IAppState, any> {
    const store = createStore(rootReducer,undefined,applyMiddleware(thunk));
    return store;
} 
