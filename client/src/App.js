import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home/home';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/show-logged" />

        <Route path='/' element={<Home />} />
          {/* <Route path='/create' element={<CreateCard />} /> */}
          {/* <Route path='/edit/:id' element={<EditCard />} /> */}
          
      </div>
    </Router>
  );
}

export default App;