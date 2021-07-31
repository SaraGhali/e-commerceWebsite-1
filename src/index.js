import React from "react";
import ReactDOM from "react-dom";
import App from './App.js';
import {BrowserRouter} from "react-router-dom";
// import store from "./store";
// import { Provider } from "react-redux";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import {InMemoryCache} from "@apollo/client";


 const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  });




ReactDOM.render(
    <React.StrictMode>
     <ApolloProvider client={client}>
    {/* <Provider store={store}> */}
    <BrowserRouter>
        <App />
        </BrowserRouter>
        {/* </Provider> */}
        </ApolloProvider>
    </React.StrictMode>,
    

    document.getElementById("root")
);