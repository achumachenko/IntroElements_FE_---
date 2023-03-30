import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

const Nav = () => {
    const isActiveRoute = ({ isActive }) => (isActive ? "active-route" : "");
    return (
        <>
        <header>
            <nav>
                <NavLink end to="/" className={isActiveRoute}>
                    Home
                </NavLink>
                
                <NavLink to="/posts" className={isActiveRoute}>Blog</NavLink>
                <NavLink to="/about" className={isActiveRoute}>About</NavLink>
            </nav>
        </header>
        <Outlet/>
        </>
        
    )
};

export { Nav};