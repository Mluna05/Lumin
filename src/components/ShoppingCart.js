import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

//components
//import ProductCard from './ProductCard';

const getCurrencyQuery = gql`
{
    currency
}
`;

function ShoppingCart() {

  const { loading, error, data } = useQuery(getCurrencyQuery);

  const displayCurrency  = () =>  {
  	var dataCurrency = data.currency;
  	return dataCurrency.map( currency => {
  		return (
  			<option value={ currency }> 
	  			{ currency }
  			</option>
  		);
  	});
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return(

    <section>
	    <div className="ShoppingCart">
        <select id="ddlCurrency">
          { displayCurrency() }
        </select>
	    </div>
    </section>
  );

}

export default ShoppingCart;
