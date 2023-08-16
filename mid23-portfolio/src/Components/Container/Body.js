import {Routes, Route} from 'react-router-dom';
import Home from '../Pages/Home';
import Project1 from '../Pages/Project1';
import Project2 from '../Pages/Project2';
import Project3 from '../Pages/Project3';
import Project4 from '../Pages/Project4';
import Project5 from '../Pages/Project5';
import Project6 from '../Pages/Project6';
import Project7 from '../Pages/Project7';
import Project8 from '../Pages/Project8';
import Project9 from '../Pages/Project9';
import Project10 from '../Pages/Project10';
import Error from '../Pages/Error';

export default function Body() {
    return (
        <Routes>
            <Route exact = {true} path = '/' element = {<Home />}/>
            <Route path = '/Project1' element = {<Project1 />}/>
            <Route path = '/Project2' element = {<Project2 />}/>
            <Route path = '/Project3' element = {<Project3 />}/>
            <Route path = '/Project4' element = {<Project4 />}/>
            <Route path = '/Project5' element = {<Project5 />}/>
            <Route path = '/Project6' element = {<Project6 />}/>
            <Route path = '/Project7' element = {<Project7 />}/>
            <Route path = '/Project8' element = {<Project8 />}/>
            <Route path = '/Project9' element = {<Project9 />}/>
            <Route path = '/Project10' element = {<Project10 />}/>
            <Route path = '*' element = {<Error />}/>
        </Routes>
);
};