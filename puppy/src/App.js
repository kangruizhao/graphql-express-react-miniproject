import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FormComponent from './form_component';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});
const App =()=>{



    return (
      <ApolloProvider client={client}>
      <div>
        <FormComponent/>
        </div>
        </ApolloProvider>
    );

}

export default App;
