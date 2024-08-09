import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React, { useContext } from 'react';
import ProtectedRoute from './components/container/ProtectedRoute';
import './App.css';

import { UserContext } from './components/context/UserProvider';
import Nav from './components/container/Nav';
import Footer from './components/container/Footer';
import Auth from './components/Auth/Auth';
import Profile from './components/container/pages/Profile';
import Home from './components/container/pages/Home';
import Sofas from './components/container/pages/Sofas';
import Ottomans from './components/container/pages/Ottomans';
import Tables from './components/container/pages/Tables';
import CartList from './components/container/pages/Cart/CartList';


function App(){
  const {token} = useContext(UserContext)

  return (
    <BrowserRouter>
      <div>
        <Nav />

        <Routes>
          <Route exact = {true} path = "/" element = {token ? <Navigate to = '/profile'/> : <Auth/>}/>
          <Route path="/profile/*" element={<ProtectedRoute component = {Profile} redirectTo = '/bag' token = {token} />} />
          <Route path = "/home" element = {<Home/>} />
          <Route path = "/sofas" element = {<Sofas/>} />
          <Route path = "/ottomans" element = {<Ottomans/>} />
          <Route path = "/tables" element = {<Tables/>} />
          <Route path = "/bag" element = {<CartList/>} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
