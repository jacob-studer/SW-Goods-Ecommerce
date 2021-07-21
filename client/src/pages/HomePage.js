import React from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>

        <h1>Connected!</h1>

        <div>

        {Auth.loggedIn() ? (
            <>
              <p>you are logged in</p>
              <button onClick={Auth.logout}>Logout</button>
            </>
          ) : (
            
            <li><Link to="/login" className="nav-links btn">Login</Link></li>
            
          )}

        </div>

        </div>
    )
} 

export default HomePage