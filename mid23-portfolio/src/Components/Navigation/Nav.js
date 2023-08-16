import React, {useState} from 'react';

const Navbar = () => {
    return(
        // change hotdog classes
        const [hotdog_class, setHotdogClass] = useState('hotdog-bar unclicked')
        const [menu_class, setMenuClass] = useState('menu hidden')
        const [isMenuClicked, setIsMenuClicked] = useState(false)

        <div style={{width: '100%', height: '100vh'}}>
            <nav>
                <div className='hotdog-menu'>
                    <div className='hotdog_class' onClick={updateManu}></div>
                    <div className='hotdog_class' onClick={updateManu}></div>
                </div>
            </nav>

            <div className={menu_class}></div>
        </div>
    )
}

export default Navbar