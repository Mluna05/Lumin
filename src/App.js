import React , { Fragment, useState } from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

//components
import GridGallery from './components/GridGallery';
import ShoppingCart from './components/ShoppingCart';

//Apollo client setup
const client = new ApolloClient({
  uri:'https://pangaea-interviews.now.sh/api/graphql',
}); 

const App = () => {
  
  const [shopCartModal, setShopCartModal] = useState(false);

  const[orders, setOrders] = useState({ 
  										products:[{ 
  													id:'', 
		  											title:'', 
		  											image_url:'', 
		  											price:'',
		  											qty:0
		  										  }], 
										currency:'USD', 
										subTotal: 0  
									  });

	  // When the user clicks on (x), close the modal
  const openModal  = () => {
  	setShopCartModal(!shopCartModal);
  }


  const addToShoppingCart  = ( product ) => {

  	product.qty = orders.products.map((order) => order.id === product.id ?  order.qty += 1 :  1 )[0];

	setOrders( { products: [ product ] , currency: 'USD' , subTotal: 0  } );
  }


  return (
    <ApolloProvider client={client}>

    	<div className="headerSite"> 
    		<img src="https://cdn.shopify.com/s/files/1/0044/1237/5107/files/black.font.sipmle_360x.png?v=1555959070" alt='Lumin-Logo'/> 
    		<div className="optMenu">Shop</div>
    		<div className="optMenu">Learn</div>
    		<div className="optAccount">Account</div>
			<div className="iconCart" onClick={openModal}>Cart</div>
    	</div>

	    <div className="contentProduct">
	        <GridGallery addToShoppingCart={addToShoppingCart} /> 
	   
	    { (shopCartModal) ? <Fragment> <div className="modal" id="modal"></div> <ShoppingCart orders={ orders }/> </Fragment> : '' }

	    </div>

    </ApolloProvider>
  );
}

export default App;

 /*  */