import React from 'react';
import ReactDOM from 'react-dom/client';
import UserProvider from './components/context/UserProvider'
import DataProvider from './components/context/DataProvider';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DataProvider><UserProvider><App /></UserProvider></DataProvider>)

