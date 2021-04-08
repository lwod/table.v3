import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";

import io from 'socket.io-client'
import TextField from '@material-ui/core/TextField'

const socket = io.connect('http://localhost:4000')

const App = () => {
  
  const [state, setState] = useState({message:'', name:''})
  
  const [chat, setChat] = useState([])
  
  return (
    <div className="App">
    </div>
  );
}

export default App;
