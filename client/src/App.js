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
import Home from './pages/home/Home';
import ShowLogged from './pages/ShowLogged/ShowLogged';


  function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/create' element={<CreateCard />} /> */}
            {/* <Route path='/edit/:id' element={<EditCard />} /> */}

            <Route path='/show-logged' element={<ShowLogged />}/>

          </Routes>
        </BrowserRouter>
      </div>
    );
  }

export default App;