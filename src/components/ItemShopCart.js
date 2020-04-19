import React from 'react';

const ItemShopCart = (  { product , addToShoppingCart, delToShoppingCart }  ) => {

  let { id, title, image_url, price, qty} = { ...product };

  const addItem  = () => {
    addToShoppingCart(product);
  }

  const delItem  = () => {
    delToShoppingCart(product);
  }

  const removeItem  = () => {
    product.qty = 1;
    delToShoppingCart( product );
  }

  return(
    <div className="itemShopCart">

          <div className="clItemShopCart" onClick={ removeItem }>&times;</div>
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
