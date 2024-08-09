import React/*, { useContext }*/ from "react";
// import { UserContext } from '../../context/UserProvider';
import Cart from './Cart'


export default function CartList(){
    // const {user: {username}} = useContext(UserContext)
    return (
        <div>
            <h1>Welcome!</h1>
            <Cart />
        </div>
    )
}