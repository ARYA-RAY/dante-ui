import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
const client = new ApolloClient({
  uri: 'http://localhost:8081/graphql/execute', // Replace with your GraphQL server endpoint
  cache: new InMemoryCache(),
});

root.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
);

