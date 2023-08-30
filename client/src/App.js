import '../../Home/Home.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowLogged from '../../ShowLogged/ShowLogged';
import Home from '../../Home/Home';




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