import './App.css';
// import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Nav from './Components/Container/Nav';
import Body from './Components/Container/Body';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Body />
      </div>
    </BrowserRouter>
  );
};
