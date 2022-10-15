import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import Generador from './components/generador/generador';
import Lista from './components/lista/lista';



function App() {
  const [point, setPoint]=useState([])

  return (
    <div className="App">
      <Generador point={point} setPoint={setPoint}/>
      <Lista point={point} setPoint={setPoint}/>
    </div>
  );
}

export default App;
