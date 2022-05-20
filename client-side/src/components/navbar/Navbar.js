import React from 'react';
import './Navbar.css';
import {BrowserRouter,Route,Link,Switch,useHistory} from 'react-router-dom';
const Navbar = () => {
    return(
        <div>
            <div className="topnav">
             <Link to="/" style={{"background" : "#e29578"}}>Home</Link>
            <Link to="/page1">Enter Details</Link>
            <Link to="/page2">Studnet Details</Link>
            
            </div>

            
        </div>
        
    )
}

export default Navbar;