import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import Route and Switch
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home.js';
import Players from './Players.js';
import Timer from './Timer.js';
import AddPlayer from './AddPlayer.js';
import EndGame from './EndGame';
import { GameProvider } from './GameContext'; 





function App() {
  return (
    <div className="App">
      <GameProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={(<Home/>)} />
            <Route path='/team' element={(<Players/>)}/>
            <Route path='/timer' element={(<Timer/>)}/>
            <Route path='/add-player' element={(<AddPlayer/>)}/>
            <Route path="/endGame" element={<EndGame />} />

          </Routes>
        </BrowserRouter>
      </GameProvider>
    </div>
  );
}

export default App;