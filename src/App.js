import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './page/admin/Admin/Admin';
import Home from './page/home/Home/Home';
import Login from './page/share/Login/Login';
import NavbarTop from './page/share/NavbarTop/NavbarTop';

export const AdminContext = createContext();

function App() {
  const [user, setUser] = useState({})
  return (
    <AdminContext.Provider value={[user, setUser]}>
      <NavbarTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AdminContext.Provider>
  );
}

export default App;
