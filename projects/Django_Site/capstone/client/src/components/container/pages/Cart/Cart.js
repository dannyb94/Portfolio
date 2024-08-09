import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import UserContext from "../../context/UserProvider";
import {DataContext} from "../../../context/DataProvider";

function Cart(){
  // const [sofas] = useState([])
  const { /*setCart,*/ dataState } = useContext(DataContext)

  // const addToCart = (sofa) => {
  //   console.log("Added to cart")
  //   setCart(sofa)
  // }

  // Confused how to link the length of cart items to "Bag()" in the navbar

  return (
      <div>
        {dataState.cart.map((item) => (
          <div>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>{"$"[item.price]}</p>
            {/* <Link to='/profile'><button onClick={() => addToCart(sofa)}> + </button></Link> */}
          </div>
        ))}
      </div>
  );
}

export default Cart;



// import React, { useState, useEffect, useContext } from 'react';
// import { UserContext } from '../../../context/UserProvider';

// function Cart(props){
//   // const [startComms, setComms] = useState(false)
//   const [showCart, setShowCart] = useState(false)
//   // const { getIssueComments, issueComments } = useContext(UserContext)
  
//   // const { newIssue, _id } = props

//   // const toggleComms = (id) => {
//   //     setComms (prevState => (!prevState))
//   // }

//   // const seeComms = () => {
//   //     setShowCart(prevState => !prevState)
//   //     if(!showCart){
//   //         getIssueComments(_id)
//   //     }
//   // }

//   return (
//       <div>
//         <h1>Your Bag</h1>

//         {/* {newIssue} */}
//             {showCart
//                 ? 
//                 (issueComments && issueComments.length
//                 ?
//                 issueComments[0].map(comment => <Comments {...comment} key={comment._id} />) : "")
//                 : 
//                 (<button className="commsBtn" onClick={seeComms}>Show Comments</button>)
//             }    
            
//             {showCart ? <button className='commsBtn' onClick={seeComms}>Hide Comments</button> : ''}

//             {startComms ? <CommentsForm toggleComms = {() => toggleComms()} issueId = {_id} /> : <button className="commsBtn" onClick={toggleComms}>Post A Comment</button>}
//       </div>
//   );
// }

// export default Cart;
