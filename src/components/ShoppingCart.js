import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

//components
import ItemShopCart from './ItemShopCart';

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
  			<option value={ currency } key={ "k_"+currency }> 
	  			{ currency }
  			</option>
  		);
  	});
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  // When the user clicks on <span> (x), close the modal
  const closeModal  = () => {
    document.getElementById("modal").style.display = "none";
    document.getElementsByClassName("ShoppingCart")[0].style.display = "none";
  }

  return(
        <div className="ShoppingCart">

          <div className="close" onClick={closeModal}>&times;</div>

          <div className="titleCart">YOUR CART</div>

    	    <div className="cartCurrency">
            <select className="ddlCurrency">
              { displayCurrency() }
            </select>
    	    </div>

          <div className="listItem">
              <ItemShopCart />
          </div>

          <div className="totalSec">

              <hr className="lnTotal"/>

              <div className="lblTotal">Subtotal</div>
              <div className="valueTotal">$100.00</div>

              <button className="btnSubs" >MAKE THIS A SUBSCRIPTION (SAVE 20%)</button>
              <button className="btnCheckOut" >PROCEED TO CHECKOUT</button>

          </div>

        </div>  
   );

}

export default ShoppingCart;
