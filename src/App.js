import React , { Fragment, useState } from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

//react - icons
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowDropleft } from "react-icons/io";

//components
import GridGallery from './components/GridGallery';
import ShoppingCart from './components/ShoppingCart';

//Apollo client setup
const client = new ApolloClient({
  uri:'https://pangaea-interviews.now.sh/api/graphql',
}); 

const App = () => {
  
  const [shopCartModal, setShopCartModal] = useState(false);

  const productPrime = { 
						id:'', 
						title:'', 
						image_url:'', 
						price:'',
						qty:0
					  };

  const[orders, setOrders] = useState({ 
  										products:[], 
										currency:'USD',
										totalItems:0, 
										subTotal: 0  
									  });

  const openModal  = () => {
  	setShopCartModal(!shopCartModal);
  }


  const addToShoppingCart  = ( item ) => {

  	let products = orders.products; 

    let objIndex = orders.products.findIndex((obj => obj.id === item.id));

    if(objIndex === -1){
    	item.qty = 1;
    	products.push(item);
    }

    if( objIndex >= 0 ){
    	item.qty = products[objIndex].qty + 1;
    	products[objIndex] = item;

    }
  	
	setOrders( { products , currency: orders.currency , totalItems: calculatetotalItems(products),  subTotal: calculateSubTotal(products)  } );
  }

  const delToShoppingCart  = ( item ) => {

  	let products = orders.products; 

    let objIndex = orders.products.findIndex((obj => obj.id === item.id));

    if( products[objIndex].qty > 1 ){
    	item.qty = products[objIndex].qty - 1;
    	products[objIndex] = item;
    }else {
    	products.splice(objIndex, 1); 
    }
  	
	setOrders( { products , currency: orders.currency , totalItems: calculatetotalItems(products), subTotal: calculateSubTotal(products)  } );
  }

  const calculatetotalItems = ( products ) => {
  	return products.reduce( ( acc, product) => acc + product.qty , 0 );
  }

  const calculateSubTotal = ( products ) => {
  	return products.map(product => product.price * product.qty ).reduce( ( acc, total ) => acc + total , 0 );
  }

  const setCurrency = (currency) =>{
	setOrders( { ...orders,currency } );
  }

  return (
    <ApolloProvider client={client}>

    	<div className="headerSite"> 
    		<img src="https://cdn.shopify.com/s/files/1/0044/1237/5107/files/black.font.sipmle_360x.png?v=1555959070" alt='Lumin-Logo'/> 
    		<div className="optMenu">Shop</div>
    		<div className="optMenu">Learn</div>
    		<div className="optAccount">Account</div>
			<div className="iconCart" 
				 onClick={ openModal }>
					 <FiShoppingCart size="1.5em"/> 
					 <div className="ttNumCart" > { orders.totalItems } </div> 
				</div>
    	</div>

	    <div className="contentProduct">
	        <GridGallery addToShoppingCart={addToShoppingCart} 
	        			 currencyState={ orders.currency } 
	        			 calculateSubTotal={ calculateSubTotal } /> 
	   
	    { shopCartModal ? <Fragment> <div className="modal" id="modal"></div> <ShoppingCart orders={ orders } 
	    																					openModal={ openModal } 
	    																					addToShoppingCart={ addToShoppingCart }
	    																					delToShoppingCart={ delToShoppingCart }  
	    																					setCurrency={ setCurrency }
	    																					IoIosArrowDropleft= { <IoIosArrowDropleft/> }/> 
	    				  </Fragment> : null }

	    </div>

    </ApolloProvider>
  );
}

export default App;

 /*  */