import React from 'react';

import './App.css';

import TopLine from "./components/TopLine/TopLine";
import SecondLine from "./components/SecondLine/SecondLine";
import Intro from "./components/Intro/Intro";

function App() {
  return (
    <div className="App">
      <TopLine/>
        <SecondLine/>
        <Intro />
    </div>
  );
}

export default App;
