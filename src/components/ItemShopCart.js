import React from 'react';

const ItemShopCart = ( { product : { id, title, image_url, price, qty} } ) => {

   const addItem  = () => {
    let value = Number(document.getElementsByClassName("qtyItem")[0].innerText) + 1;
    document.getElementsByClassName("qtyItem")[0].innerText = value;
  }

  const delItem  = () => {
    let value = Number(document.getElementsByClassName("qtyItem")[0].innerText) - 1;
    document.getElementsByClassName("qtyItem")[0].innerText = value;
  }

  return(
    <div className="itemShopCart">

          <div className="clItemShopCart" >&times;</div>
          <p> { title } </p>
      
          <div className="ItemShopCartImg">
               <img 
              src={ image_url }
              alt={ title } />
          </div>

          <div className="ItemShopCartPrice"> ${ price }.00 </div>

          <div className="unitCntrl">
              <button className="btnLess" onClick={ delItem }>-</button>
              <div className="qtyItem"> { qty } </div>
              <button className="btnPlus" onClick={ addItem }>+</button>
          </div>

    </div>
  );

}

export default ItemShopCart;
