import React from 'react';

function ProductCard(props) {

  return(
    <div className="GridGalleryCol">
      <div class="prodCard"> 
          <div class="prodCardImg">
              <img 
                src={props.product.image_url} 
                alt={props.product.title} />
          </div>
          <p> {props.product.title} </p>
          <h2> From: {props.product.price} </h2>
      </div>
    </div>
  );

}

export default ProductCard;
