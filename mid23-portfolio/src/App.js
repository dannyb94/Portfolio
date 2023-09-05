import './App.css';
import './Fonts.css';
import {BrowserRouter} from 'react-router-dom';
import Nav from './Components/Container/Nav';
import Body from './Components/Container/Body';

export default function App() {
  return (
    <BrowserRouter>
      <div id='site'>
        <Nav />
        <Body />
      </div>
    </BrowserRouter>
  );
};
