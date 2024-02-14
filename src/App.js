/*import logo from './logo.svg';
import './App.css';*/


import React, {useState} from 'react';
import ScreenDelYes from './screens/ScreenDelYes';
import ScreenConElYesAgrandado from './screens/ScreenConElYesAgrandado';

 function App() {
  const [botonYesApretado, setBotonYesApretado] = useState(false);
  return (
    <div style={{
    
    minHeight: '100vh', 
    boxSizing: 'border-box'}}>
      
      {botonYesApretado ? <ScreenDelYes/> : <ScreenConElYesAgrandado setBotonYesApretado={setBotonYesApretado}/>}
      
      </div>
      
    
  );
}


export default App;



/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
