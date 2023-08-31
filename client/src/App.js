import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowLogged from './pages/ShowLogged/ShowLogged';
import Signin from './pages/signin/Signin';
import Edit from './pages/Edit/Edit';
import Home from './pages/Home/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          {/* <Route path='/create' element={<CreateCard />} /> */}
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/show-logged/:id' element={<ShowLogged />} />
          <Route path='/signin' element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;