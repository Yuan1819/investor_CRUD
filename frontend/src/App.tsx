import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {InvestorList} from "./components/InvestorList";


function App() {
  return (
    <div className="App">
      <InvestorList></InvestorList>
    </div>
  );
}

export default App;
