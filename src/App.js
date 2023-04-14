import './App.css';
import React from 'react'
import Main from './routes/Main';


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Reservations from './routes/Reservations';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path = "/" element = {<Main />}/>
          <Route path = "/reservation" element = {<Reservations />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
