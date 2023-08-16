// import React from 'react';

// export default function Home() {
//     return (
//         <div>
//             <h1>Home w/Grid</h1>
//         </div>
//     );
// };


import React from 'react';
import {Link} from 'react-router-dom';

export default function Grid() {
    return (
        <div id='MainCntnr'>
            <Link className='box box1' to='/Project1'><div>{/* <img src='https://placehold.co/600x400'/> */}</div></Link>
            <Link className='box box2' to='/Project2'><div></div></Link>
            <Link className='box box3' to='/Project3'><div></div></Link>
            <Link className='box box4' to='/Project4'><div></div></Link>
            <Link className='box box5' to='/Project5'><div></div></Link>
            <Link className='box box6' to='/Project6'><div></div></Link>
            <Link className='box box7' to='/Project7'><div></div></Link>
            <Link className='box box8' to='/Project8'><div></div></Link>
            <Link className='box box9' to='/Project9'><div></div></Link>
            <Link className='box box10' to='/Project10'><div></div></Link>
        </div>
    );
};