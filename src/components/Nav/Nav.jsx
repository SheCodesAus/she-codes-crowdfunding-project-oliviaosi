import React from "react";
import {Link} from "react-router-dom";
import "./Nav.css";

function Nav(){
    return(
        
        <nav className="navbar">
            <div className="left-nav">
            <div> Logo</div>
            <Link to="/">Homepage</Link>
            </div>
            
            <Link to="/login" className="login-btn">Login</Link>
            {/* <Link to="/project">ProjectPage</Link> */}
        </nav>
    );
}

export default Nav;


