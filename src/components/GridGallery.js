import React from 'react';
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

function GridGallery() {

  const { loading, error, data } = useQuery(getProductQuery);

  const displayProducts  = () =>  {
  	var dataProducts = data.products;
  	return dataProducts.map( product => {
  		return (
  			<div> 
	  			<ProductCard product={product} > </ProductCard>
  			</div>
  		);
  	});
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return(

    <section>
	    <div className="GridGalleryRow">
	      	{ displayProducts() }   
	    </div>
    </section>
  );

}

export default GridGallery;
