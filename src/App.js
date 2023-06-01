import logo from './logo.svg';
import './App.css';
import { Fragment ,createContext,useState } from 'react';
import {Watch} from './components/watch'
import {LapList} from './components/lap';

export const AppContext = createContext(null);

function App() {
    const [laps ,addLaps] = useState([]);
    return (
    <Fragment >
      <AppContext.Provider value={{laps,addLaps}}>
      <div className='body'>
        
        <Watch />


      </div>


      </AppContext.Provider>

    </Fragment>
  );
}

export default App;
