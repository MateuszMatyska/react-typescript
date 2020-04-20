import React, {useEffect} from 'react';
import './App.css';
import Routing from './navigation/Routing/Routing';
import {useDispatch} from 'react-redux';
import {GetLoginUser} from 'store/actions/UserActions';
import {Auth} from 'navigation/Auth';

const App: React.FC<any> = (props: any) => {
  const dispatch = useDispatch();
  const user = localStorage.getItem('token');

  useEffect(() => {
    Auth();
  }, []);

  if(user) {
      dispatch(GetLoginUser(user));
  }

  return <Routing />
}

export default App;
