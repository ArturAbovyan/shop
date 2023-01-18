import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import client from "./apolloClient";
import { ApolloProvider } from "@apollo/client";
import {AuthProvider} from "./context/authContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AuthProvider>
          <ApolloProvider client={client}>
              <App />
          </ApolloProvider>
      </AuthProvider>
  </React.StrictMode>
);


reportWebVitals();
