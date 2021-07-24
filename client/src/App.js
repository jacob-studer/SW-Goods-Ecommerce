import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage'
import Footer from './components/Footer'
import ItemSearch from './pages/ItemSearchPage'
import ItemPage from './pages/ItemPage'

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
          {/* give the paramater after the path - parameter id */}
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/itemsearch/:category' component={ItemSearch} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/userpage' component={UserPage} />
            <Route exact path='/itempage' component={ItemPage} />
          </Switch>
        </>
          <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
