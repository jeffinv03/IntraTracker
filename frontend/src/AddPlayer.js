import React, { useState, useEffect } from 'react';
import { Button, Alert, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Add this line


//add new player page
function AddPlayer() {
    return (
      <>      
      <div className="players">
        <h3>Add New Player</h3>

        <h5>Active</h5>
        <h5>Inactive</h5>

        <h4>Player Name: </h4>
        <h4>Position: </h4>

        <Button>Save</Button>
        <Button>Save & Add</Button>
      </div>
      </>
    );
  }
  
  export default AddPlayer;