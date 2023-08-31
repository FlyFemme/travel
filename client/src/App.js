import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowLogged from './pages/ShowLogged/ShowLogged';
import Home from './pages/home/Home';
import Signin from './pages/signin/Signin';
<<<<<<< HEAD
import CreatePage from './pages/CreateForm/CreateForm'

=======
import Edit from './pages/Edit/Edit';
import Home from './pages/Home/Home';
>>>>>>> 7450e599d063e76806f4d62d5ca403f801b76c8b


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
<<<<<<< HEAD
          <Route path='/create' element={<CreatePage />} />
          {/* <Route path='/edit/:id' element={<EditCard />} /> */}
=======
          {/* <Route path='/create' element={<CreateCard />} /> */}
          <Route path='/edit/:id' element={<Edit />} />
>>>>>>> 7450e599d063e76806f4d62d5ca403f801b76c8b
          <Route path='/show-logged/:id' element={<ShowLogged />} />
          <Route path='/signin' element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;