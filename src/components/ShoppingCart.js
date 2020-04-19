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

const ShoppingCart = ( props ) => {

  let orders = props.orders;
  let openModal = props.openModal;
  const setCurrency = props.setCurrency;
  const addToShoppingCart = props.addToShoppingCart;
  const delToShoppingCart = props.delToShoppingCart;
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

  const  generateItems = () =>{

    var dataOrders = orders.products;
    return dataOrders.map( product => {
      return (
        <ItemShopCart 
            product={ product } 
            addToShoppingCart={ addToShoppingCart }
            delToShoppingCart={ delToShoppingCart }  
            key={ 'itmSC_' + product.id }/>
      );
    });
  }

  const displayOrders = () =>{
     return orders.products.lenght === 0 ? ''  : generateItems();
  }

  const closeModal  = () => {
    openModal();
  }

  const sendCurrency = (e) =>{
     setCurrency(e.target.value);
  }

  return(
        <div className="ShoppingCart">

          <div className="close" onClick={closeModal}>&times;</div>

          <div className="titleCart">YOUR CART</div>

    	    <div className="cartCurrency">
            <select className="ddlCurrency" onChange={ sendCurrency } >
              { displayCurrency() }
            </select>
    	    </div>

          <div className="listItem">
              { displayOrders() } 
          </div>

          <div className="totalSec">

              <hr className="lnTotal"/>

              <div className="lblTotal">Subtotal</div>
              <div className="valueTotal">$ {orders.subTotal}.00</div>

              <button className="btnSubs" >MAKE THIS A SUBSCRIPTION (SAVE 20%)</button>
              <button className="btnCheckOut" >PROCEED TO CHECKOUT</button>

          </div>

        </div>  
   );

}

export default ShoppingCart;
