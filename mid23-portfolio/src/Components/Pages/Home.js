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
            <Link className='projects' to='/Project1'>DeleteText1<div class="box box1"></div></Link>
            <Link className='projects' to='/Project2'>DeleteText2<div class="box box2"></div></Link>
            <Link className='projects' to='/Project3'>DeleteText3<div class="box box3"></div></Link>
            <Link className='projects' to='/Project4'>DeleteText4<div class="box box4"></div></Link>
            <Link className='projects' to='/Project5'>DeleteText5<div class="box box5"></div></Link>
            <Link className='projects' to='/Project6'>DeleteText6<div class="box box6"></div></Link>
            <Link className='projects' to='/Project7'>DeleteText7<div class="box box7"></div></Link>
            <Link className='projects' to='/Project8'>DeleteText8<div class="box box8"></div></Link>
            <Link className='projects' to='/Project9'>DeleteText9<div class="box box9"></div></Link>
            <Link className='projects' to='/Project10'>DeleteText10<div class="box box10"></div></Link>
        </div>
    );
};