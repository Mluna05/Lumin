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
  return (
    <ApolloProvider client={client}>
      <div class="container">
        <GridGallery /> 
      </div>


    </ApolloProvider>
  );
}

export default App;

 /* <ShoppingCart /> */