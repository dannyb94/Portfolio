import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import UserContext from "../../context/UserProvider";
import {DataContext} from "../../context/DataProvider";

function Sofas(){
  // const [sofas] = useState([])
  const { setCart, dataState } = useContext(DataContext)

  const addToCart = (sofa) => {
    console.log("Added to cart")
    setCart(sofa)
  }

  // Confused how to link the length of cart items to "Bag()" in the navbar

  return (
      <div className="mainCntnr">
        {dataState.sofas.map((sofa) => (
          <div>
            <img src={sofa.image} alt={sofa.name} className="images" />
            <p className="prdtNames">{sofa.name}</p>
            <p className="prices">$ {sofa.price}</p>
            <Link to='/bag'><button onClick={() => addToCart(sofa)} className="addBtn" > + </button></Link>
          </div>
        ))}
      </div>
  );
}

export default Sofas;
