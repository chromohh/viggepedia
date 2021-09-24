import React from 'react';
import './App.scss';
import { Spintor } from './Views/Spintor/Spintor.js';
import { TiktokView } from './Views/Tiktok/TiktokView';
function App() {
  return (
    <div className="App" >
      <h1 className="Head1">Viggepedia!</h1>
      <TiktokView></TiktokView>
      <Spintor></Spintor>
    </div>
  );
}

export default App;
