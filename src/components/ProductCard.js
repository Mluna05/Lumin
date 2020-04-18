import React from 'react';

const ProductCard = ( {  product: { id, title, image_url, price } , addToShoppingCart } ) => {

  const handlerAddShoppingCart = () => {
    addToShoppingCart( { id, title, image_url, price, qty: 0 } );
  }

  return(
    <div className="GridGalleryCol">
      <div className="prodCard"> 
          <div className="prodCardImg">
              <img 
                src={image_url} 
                alt={title} />
          </div>
          <p> {title} </p>
          <div> From: ${price}.00 </div>
          <button className="button" onClick={handlerAddShoppingCart} >Add to Cart</button>
      </div>
    </div>
  );

}

export default ProductCard;
