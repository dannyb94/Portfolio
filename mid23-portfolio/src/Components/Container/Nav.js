import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../Assets/logo.png'

export default function Nav() {
    return (
        <div>
            <div id='logoDiv'>
                <Link to='/' className='LogoHome'>
                    <img src={logo} alt='du logo' id='duLogo' />
                </Link>
            </div>
        </div>
    );
};



// import React, {useState} from 'react';
// // import {Link} from 'react-router-dom';

// export default function Nav() {

//     // change hotdog classes
//     const [hotdog_class, setHotdogClass] = useState('hotdog-bar unclicked')
//     const [menu_class, setMenuClass] = useState('menu hidden')
//     const [isMenuClicked, setIsMenuClicked] = useState(false)

//     // toggle hotdog menu change
//     const updateMenu = () => {
//         if(!isMenuClicked){
//             setHotdogClass("hotdog-bar clicked")
//             setMenuClass("menu visible")
//         }
//         else {
//             setHotdogClass("hotdog-bar unclicked")
//             setMenuClass("menu hidden")
//         }
//     }


//     return (


//         <div style={{width: '100%', height: '100vh'}}>
//             <nav>
//                 <div className='hotdog-menu'>
//                     <div className='hotdog_class' onClick={updateMenu}></div>
//                     <div className='hotdog_class' onClick={updateMenu}></div>
//                 </div>
//             </nav>

//             <div className={menu_class}></div>
//         </div>
        
//         // <header>
//         //     <Link id='home' to='/'>Home</Link>
//         //     <Link className='projects' to='/Project1'>Project1</Link>
//         //     <Link className='projects' to='/Project2'>Project2</Link>
//         // </header>
//     );
// };