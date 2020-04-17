import React from 'react';
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

function App() {

	  // When the user clicks on <span> (x), close the modal
  const openModal  = () => {
    document.getElementById("modal").style.display = "block";
    document.getElementsByClassName("ShoppingCart")[0].style.display = "block";
  }

  return (
    <ApolloProvider client={client}>

    	<div className="headerSite"> 
    		<img src="https://cdn.shopify.com/s/files/1/0044/1237/5107/files/black.font.sipmle_360x.png?v=1555959070" /> 
    		<div className="optMenu">Shop</div>
    		<div className="optMenu">Learn</div>
    		<div className="optAccount">Account</div>
			<div className="iconCart" onClick={openModal}>Cart</div>
    	</div>

	    <div className="contentProduct">
	        <GridGallery /> 

	        <div className="modal" id="modal"></div>
	        <ShoppingCart/>
	    </div>

    </ApolloProvider>
  );
}

export default App;

 /*  */