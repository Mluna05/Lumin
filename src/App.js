import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

//components
import GridGallery from './components/GridGallery';

//Apollo client setup
const client = new ApolloClient({
  uri:'https://pangaea-interviews.now.sh/api/graphql',
}); 

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1> Lumin Skin Care</h1>
        <GridGallery />
      </div>
    </ApolloProvider>
  );
}

export default App;
