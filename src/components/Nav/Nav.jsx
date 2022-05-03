import React from "react";
import {Link} from "react-router-dom";

function Nav(){
    return(
        <nav>
            <Link to="/">Homepage</Link>
            <Link to="/login">Login</Link>
            {/* <Link to="/project">ProjectPage</Link> */}
        </nav>
    );
}

export default Nav;


