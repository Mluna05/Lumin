import React from 'react';

function ItemShopCart() {

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
          <p> Premium-Grade Moisturizing Balm </p>
      
          <div className="ItemShopCartImg">
               <img 
              src="https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/moisturizing-balm.png" 
              alt="SIE" />
          </div>

          <div className="ItemShopCartPrice"> $29.00 </div>

          <div className="unitCntrl">
              <button className="btnLess" onClick={delItem}>-</button>
              <div className="qtyItem"> 1 </div>
              <button className="btnPlus" onClick={addItem}>+</button>
          </div>

    </div>
  );

}

export default ItemShopCart;
