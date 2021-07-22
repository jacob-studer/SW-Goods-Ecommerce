import React from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div> 
          
          This is where the Slideshow/Jumbotron will go

        <div>

        <div>
          
          This is where two side by side links will go

        </div>

        <div>

          This is where 4 items will go in tiles

        </div>

        <div>

          This is where the footer will go

        </div>



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