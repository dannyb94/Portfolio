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
            <div className='box box2'>
                <div className='boxInner'>
                    <p>Say "Hey"</p>
                    <p>What you do</p>
                </div>
            </div>
            <Link className='box box3' to='/Project3'><div></div></Link>
            <div className='box box4'>
                <div className='boxInner'>
                    <p>Social Media icon links</p>
                    <a href='https://www.linkedin.com/in/danielle-ussery-668961a3/'><p>LinkedIn</p></a>
                    <a href='https://github.com/dannyb94?tab=repositories'><p>GitHub</p></a>
                    <a href='https://www.behance.net/dannynicol4882'><p>Behance - maybe</p></a>
                </div>
            </div>
            <Link className='box box5' to='/Project5'><div></div></Link>
            <Link className='box box6' to='/Project6'><div></div></Link>
            <Link className='box box7' to='/Project7'><div></div></Link>
            <Link className='box box8' to='/Project8'><div></div></Link>
            <Link className='box box9' to='/Project9'><div></div></Link>
            <Link className='box box10' to='/Project10'><div></div></Link>
        </div>
    );
};