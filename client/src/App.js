import './pages/home/home.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import CreateForm from './pages/form/createform';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateForm />} />
          {/* <Route path='/edit/:id' element={<EditCard />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;