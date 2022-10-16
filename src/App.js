import React from 'react';
import Bootstrap from 'bootstrap';

import './App.css';
import Message from './Components/Message';
import HomePage from './Components/Home';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <Home/>
        <Message />
      </header>
    </div>
  );
}

export default App;
