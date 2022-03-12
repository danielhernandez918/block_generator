import React, { useState } from 'react';
import './App.css';
import BoxForm from './components/boxComponent';
import BoxDisplay from './components/boxDisplayComponent';

function App() {
  // const [currentBox, setCurrentBox] = useState("There are no boxes");
  
  const[boxes, setBoxes] = useState([]);

  const handleNewBox = (newBox) =>{
    // setCurrentBox(newBox)
    setBoxes([...boxes, newBox])
  };
  return (
    <div className="App">
        <BoxForm onNewBox={handleNewBox}/>
        {/* <BoxDisplay currentBox={currentBox} boxes={boxes} /> */}
        <BoxDisplay boxes={boxes} />
    </div>
  );
}

export default App;
