<<<<<<<<< Temporary merge branch 1
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/show-logged" />
      </div>
    </Router>
=========
import './pages/home/home.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/create' element={<CreateCard />} /> */}
          {/* <Route path='/edit/:id' element={<EditCard />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
>>>>>>>>> Temporary merge branch 2
  );
}

  export default App;