import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes path="/show-logged" />

        <Routes path='/' element={<Home />} />
          {/* <Route path='/create' element={<CreateCard />} /> */}
          {/* <Route path='/edit/:id' element={<EditCard />} /> */}
          
      </div>
    </Router>
  );
}

export default App;