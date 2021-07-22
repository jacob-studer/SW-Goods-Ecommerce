import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import UserPage from  './pages/UserPage'
import Footer from  './pages/Footer'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/' component={UserPage} />
            <Route exact path='/login' component={LoginPage} />
          </Switch>
        </>
          <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
