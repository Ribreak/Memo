import './App.css';
import { useState } from 'react';
import GameField from "./components/GameField.js"
import Menu from "./components/Menu.js"
import generateTiles from './utils/generateTiles.js';

function App() {
  const [checkedOption, setcheckedOption] = useState(12);
  const [gameStatus, setGameStatus] = useState({
    started: false,
    tileList: null
  });

  function handleRadioChange (e) {
    setcheckedOption(parseInt(e.target.value));
  }

  function handleGameStatus () {
    if (gameStatus.started) {
      setGameStatus({
        started: false,
        tileList: null
      })
    } else {
      setGameStatus({
        started: true,
        tileList: generateTiles(checkedOption)
      })
    }
  }

  return (
    <div className="App">
      {gameStatus.started ? <GameField generatedTiles={gameStatus.tileList} onClickEnd={handleGameStatus}></GameField> : 
      <Menu onClickStart={handleGameStatus} checkedOption={checkedOption} onRadioChange={handleRadioChange}></Menu>}
    </div>
  );
}

export default App;
