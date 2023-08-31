import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowLogged from './pages/ShowLogged/ShowLogged';
import Home from './pages/home/Home';
import Signin from './pages/signin/Signin';
import CreatePage from './pages/CreateForm/CreateForm'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/create' element={<CreatePage />} />
          {/* <Route path='/edit/:id' element={<EditCard />} /> */}
          <Route path='/show-logged/:id' element={<ShowLogged />} />
          <Route path='/signin' element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;