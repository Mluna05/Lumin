import React, { Fragment } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

//components
import ProductCard from './ProductCard';

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

const GridGallery = ({ addToShoppingCart }) => {


  const { loading, error, data } = useQuery(getProductQuery);

  const displayProducts  = () =>  {
  	var dataProducts = data.products;
  	return dataProducts.map( product => {
  		return (
  			<div key={'product_' + product.id}> 
	  			<ProductCard product={ product } addToShoppingCart = { addToShoppingCart } />
  			</div>
  		);
  	});
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return(

    <Fragment>
        <div className="headerGG">
            <h2>ALL Products</h2>
            <p>A 360º look at Lumin</p>
        </div>

        <div className="container">
      	    <div className="GridGalleryRow">
      	      	{ displayProducts() }   
      	    </div>
        </div>
    </Fragment>
  );

}

export default GridGallery;
