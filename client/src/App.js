import './pages/home/Home.css';
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