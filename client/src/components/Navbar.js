import React from 'react';


import { Link } from "react-router-dom";

export default function Nav() {
    return (
        
            <nav className="navbar">
                <h2 className="nav-name">SW Goods</h2>
                <ul className="nav-list">
                    <li><Link to="/" className="nav-links btn">New</Link></li>
                    <li><Link to="/living" className="nav-links btn">Living</Link></li>
                    <li><Link to="/apparel" className="nav-links btn">Apparel</Link></li>
                    <li><Link to="/contact" className="nav-links btn">On Sale</Link></li>
                    <li><Link to="/login" className="nav-links btn">Login</Link></li>
                </ul>
            </nav>
    );
}