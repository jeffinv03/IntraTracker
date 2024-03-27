import React, { useState, useEffect } from 'react';
import { Button, Alert, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Add this line
import PlayerInfo from './components/PlayerInfo.js'
import "./Players.css";

const teamList = [
  {
    name: 'Rhea',
    position: 'Baller',
    captain: false,
    playing: false,
  },
  {
    name: 'Blaine',
    position: 'Computer',
    captain: false,
    playing: false,
  }
];



//add new player page
function Players() {
    return (
      <div class="players-page d-flex flex-column align-items-center justify-content-center">
        <div className="display-players">
          {teamList.map(item => (
            <PlayerInfo key = {item.name} {...item} />
          ))}
        </div>
        <div>
          <Link to="/add-player" className="btn btn-primary rounded-pill ms-3 button-style home-button">Add Player</Link>
        </div>
      </div>
    );
  }
  
  export default Players;