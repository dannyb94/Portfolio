import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';

import logo from '../../assets/logo2.png'
import { Icon as UserAcct } from '@iconify/react';


export default function Nav(){
    const {logout, token} = useContext(UserContext)

  const getOut = (user) => {
    console.log("Logged out")
    logout(user)
  }

    return (
        <div>
            <header>
                <span id='navLeft'>
                    <Link to='/Sofas' className='nav' style={{textDecoration: "none"}}>Sofas</Link>
                    <Link to='/Ottomans' className='nav' style={{textDecoration: "none"}}>Ottomans</Link>
                    <Link to='/Tables' className='nav' style={{textDecoration: "none"}}>Tables</Link>
                </span>

                <span id='logoSpan'>
                    <Link to='/Home' className='nav'>
                        <img src={logo} alt='davenport logo' id='logo'/>
                    </Link>
                </span>
                
                <span id='navRight'>
                    <Link to='/Bag' id='bag' className='nav' style={{textDecoration: "none"}}>Bag({/*cart.length*/})</Link>
                    <Link to='/User' className='nav' style={{textDecoration: "none"}}>   {/* Instead of linking to a page can this just bring up a login/sign up window */}
                        {token && <UserAcct icon="carbon:user-filled" height="22" alt='user icon' onClick={()=> getOut()} />}
                    </Link>
                </span>
            </header>
        </div>
    )
}

