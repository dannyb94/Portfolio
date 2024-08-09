import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {DataContext} from "../../context/DataProvider";

function Tables(){
  const { setCart, dataState } = useContext(DataContext)

  const addToCart = (table) => {
    console.log("Added to cart")
    setCart(table)
  }

  return (
      <div className="mainCntnr">
        {dataState.tables.map((table) => (
          <div class="boxes">
            <img src={table.image} alt={table.name} className="images" />
            <p className="prdtNames">{table.name}</p>
            <p className="prices">$ {table.price}</p>
            <Link to='/bag'><button onClick={() => addToCart(table)} className="addBtn" > + </button></Link>
          </div>
        ))}
      </div>
  );
}

export default Tables;
