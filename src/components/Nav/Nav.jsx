import React from "react";
import {Link, useNavigate} from "react-router-dom";
import "./Nav.css";

function Nav(){

    const navigate = useNavigate();
    
    const navigateToLogin = () => {
        navigate("/login")
    }

    const handleSignout = () => {
        window.localStorage.removeItem("token")
        navigateToLogin()
    }

    const checkUser = () => {
        const isUserLoggedin = !!window.localStorage.getItem("token");
        console.log("isUserLoggedin", isUserLoggedin)

        return isUserLoggedin
            ? <button onClick={handleSignout} className="login-btn">Sign out</button>
            : <button onClick={navigateToLogin} className="login-btn">Login</button>
        
    }

    return(
        
        <nav className="navbar">
            <div className="left-nav">
            <div> Logo</div>
            <Link to="/">Homepage</Link>
            </div>
            
            
            {checkUser()}
            {/* <Link to="/project">ProjectPage</Link> */}
        </nav>
    );
}

export default Nav;


