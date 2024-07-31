import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Routes, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Shop } from './pages/Shop';
import { Intro } from './pages/Intro';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        
        <Route path="/" element={<Intro />} />
      </Routes>
    </>
  );
}

export default App;
