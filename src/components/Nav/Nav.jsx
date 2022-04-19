import React from "react";

import {Link} from "react-router-dom";

function Nav(){
    return(
        
        <nav>
            <Link to="/">Homepage</Link>
            <Link to="/projects">ProjectPage</Link>

        </nav>
    );
}

export default Nav;


