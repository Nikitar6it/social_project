import React from "react";
import "./navbar.css"
import { NavLink } from "react-router-dom";


function Navbar() {
    return (
        <div className="navbar">
            <NavLink to="profile" className="navbar__link">Profile</NavLink>
            <NavLink to="messages" className="navbar__link">Messages</NavLink>
            <NavLink to="#" className="navbar__link">Users</NavLink>
        </div>
    )
}

export default Navbar