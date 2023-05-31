import logo from './logo.svg';
import './App.css';
import { Fragment  } from 'react';
import {Watch} from './components/watch'

function App() {
    return (
    <Fragment >
      <div className='body'>
        <Watch/>
      </div>
    </Fragment>
  );
}

export default App;
