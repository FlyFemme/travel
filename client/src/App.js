import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowLogged from './pages/ShowLogged/ShowLogged';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />

          {/* <Route path='/edit/:id' element={<EditCard />} /> */}

          <Route path='/show-logged' element={<ShowLogged />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

export default App;