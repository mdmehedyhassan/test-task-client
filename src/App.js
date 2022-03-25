import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/home/Home/Home';
import NavbarTop from './page/share/NavbarTop/NavbarTop';

function App() {
  return (
    <div>
      <NavbarTop/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
