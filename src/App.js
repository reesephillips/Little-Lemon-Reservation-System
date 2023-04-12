import './App.css';
import React from 'react'
import Main from './routes/Main';
import Header from './components/Header'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path = "/" element = {<Main />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
