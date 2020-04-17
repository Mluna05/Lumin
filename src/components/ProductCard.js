import React from 'react';

function ProductCard(props) {

  const onClickHandler = () =>{
    console.log(props.product.id);
  }

  return(
    <div className="GridGalleryCol">
      <div className="prodCard"> 
          <div className="prodCardImg">
              <img 
                src={props.product.image_url} 
                alt={props.product.title} />
          </div>
          <p> {props.product.title} </p>
          <div> From: ${props.product.price}.00 </div>
          <button className="button" onClick={onClickHandler}>Add to Cart</button>
      </div>
    </div>
  );

}

export default ProductCard;
