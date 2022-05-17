import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Signin } from './pages/Signin';
import { Login } from './pages/Login';
import { Products } from './pages/Products';
import { AdminPanel } from './pages/AdminPanel';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/admin_panel" element={<AdminPanel/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
