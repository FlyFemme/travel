import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowLogged from './pages/ShowLogged/ShowLogged';
import Signin from './pages/signin/Signin';
import Edit from './pages/Edit/Edit';
import Home from './pages/home/Home';
import Login from './pages/Login/Login';
import Create from './components/Create/CreateForm';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/show-logged/:id' element={<ShowLogged />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;