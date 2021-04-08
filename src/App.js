import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";

import io from 'socket.io-client'
import TextField from '@material-ui/core/TextField'

const socket = io.connect('http://localhost:4000')

const App = () => {
  
  const [state, setState] = useState({message:'', name:''})
  const [chat, setChat] = useState([]);
  
  const renderChat = ()=>{
      return chat.map(({name, message}, index)=>{
          <div key={index}>
              <h3>{name}: <span>{message}</span></h3>
          </div>
      })
  }
  
  return (
    <div className="App">
      <form
          // onSubmit={onMessageSubmit}
      >
        <h1>Message</h1>
        <div className={'name-field'}>
          <TextField
              name={'name'}
              // onChange={e=>onTexChange(e)}
              value = {state.name}
              label = "name"
          />
        </div>
  
        <div className={'message'}>
          <TextField
              name={'name'}
              // onChange={e=>onTexChange(e)}
              value = {state.message}
              id={"outlined-multiline-static"}
              variant={'outlined'}
              label = "message"
          />
        </div>
        
        <button>Send Message</button>

      </form>
      <div className={'render-chat'}>
        <h1>Chat Log</h1>
        {renderChat()}
      </div>
    </div>
  );
}

export default App;
