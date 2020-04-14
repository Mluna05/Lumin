import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const getProductQuery = gql`
  {
    products{
      id
      title
      image_url
      price(currency:USD)
    }
  }
`;

function GridGallery() {

  const { loading, error, data } = useQuery(getProductQuery);

  const displayProducts  = () =>  {
  	var dataProducts = data.products;
  	return dataProducts.map( product => {
  		return (
  			<li 
  			key={product.id} > 
	  			<p> {product.title} </p>
	  			<p> From: {product.price} </p>
	  			<div>
			        <img src={product.image_url} alt={product.title}  width="42" height="42"/>
			    </div>

  			</li>
  		);
  	});
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return(
    <div className="GridGallery">
      <ul id="product-list" >
      	{ displayProducts() }
      </ul>
    </div>
  );

}

export default GridGallery;
