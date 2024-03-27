import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import Route and Switch
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from './Home.js';
import Players from './Players.js';
import Timer from './Timer.js';
import AddPlayer from './AddPlayer.js';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={(<Home/>)} />
          <Route path='/team' element={(<Players/>)}/>
          <Route path='/timer' element={(<Timer/>)}/>
          <Route path='/add-player' element={(<AddPlayer/>)}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;