import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {DataContext} from "../../context/DataProvider";

function Ottomans(){
  const { setCart, dataState } = useContext(DataContext)

  const addToCart = (ottoman) => {
    console.log("Added to cart")
    setCart(ottoman)
  }

  return (
      <div className="mainCntnr">
        {dataState.ottomans.map((ottoman) => (
          <div>
            <img src={ottoman.image} alt={ottoman.name} className="images" />
            <p className="prdtNames">{ottoman.name}</p>
            <p className="prices">$ {ottoman.price}</p>
            <Link to='/bag'><button onClick={() => addToCart(ottoman)} className="addBtn" > + </button></Link>
          </div>
        ))}
      </div>
  );
}

export default Ottomans;
