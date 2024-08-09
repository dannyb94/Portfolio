import React, { useContext } from "react";
import { UserContext } from '../../context/UserProvider';
import Cart from './Cart/Cart'


export default function Profile(){
    const {user: {username}} = useContext(UserContext)
    return (
        <div>
            <h1>Welcome {username}</h1>
            <Cart />
        </div>
    )
}