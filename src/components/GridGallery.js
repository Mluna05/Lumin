import React, { Fragment } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

//components
import ProductCard from './ProductCard';

const GridGallery = ({ addToShoppingCart , currencyState, productsState }) => {

  let getProductQuery = gql`
  {
    products{
      id
      title
      image_url
      price(currency:${ currencyState })
    }
  }
`;
  

  const { loading, error, data } = useQuery(getProductQuery);

  const displayProducts = () =>  {  

    const updtOrders = ( dataProducts ) =>{
    }

    const dataProducts = [ ...data.products ];
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
