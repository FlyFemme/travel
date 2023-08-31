import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowLogged from './pages/ShowLogged/ShowLogged';
import Home from './pages/home/Home';
import Create from './pages/create/Create';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          {/* <Route path='/edit/:id' element={<EditCard />} /> */}
          <Route path='/show-logged/:id' element={<ShowLogged />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
