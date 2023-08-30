import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';

  function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
          <Route path='/show-logged'/>

            <Route path='/' element={<Home />} />
            {/* <Route path='/create' element={<CreateCard />} /> */}
            {/* <Route path='/edit/:id' element={<EditCard />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

  export default App;