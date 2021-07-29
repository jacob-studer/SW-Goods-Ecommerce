import React, { useEffect } from 'react';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

import brandimage from '../../assets/brand-name.jpg'

function Nav() {

    const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="nav-link">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="nav-link">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
          <li className="nav-link">
            <Link to="/cart">
              Cart
            </Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="nav-link">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/login">
              Login
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/cart">
              Cart
            </Link>
          </li>
        </ul>

        

        
      );
    }
  }

  return (
    
    <header className="flex-row">
      <h1>
        <Link to="/">
          <img src={require('../../assets/brand-name.jpg').default} alt='S&W Goods'></img>
        </Link>
      </h1>
<div className="flex-row header">
{categories.map((item) => (
  <button
    key={item._id}
    onClick={() => {
      handleClick(item._id);
    }}
  >
    {item.name}
  </button>
))}
</div>

      <nav className="nav-links">
        {showNavigation()}
      </nav>

    </header>




  );
}

export default Nav;
