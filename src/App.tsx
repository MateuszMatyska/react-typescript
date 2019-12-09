import React, {useEffect} from 'react';
import './App.css';
import Routing from './navigation/Routing/Routing';


import { Auth } from './navigation/Auth';

const App: React.FC = () => {

  useEffect(() => {
    Auth();
  }, []);

  return <Routing />
}

export default App;
