import React from "react";
import { NavLink } from "react-router-dom";
import { BiSolidHome } from "react-icons/bi";
import { FaCarAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

export default function BottomNavigation() {
    return (
        <nav className="bottom-nav">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                <BiSolidHome className="Home-Icon" />
                <span>Home</span>
            </NavLink>
            <NavLink to="/trips" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                <FaCarAlt className="Trips-Icon" />
                <span>Trips</span>
            </NavLink>
            <NavLink to="/community" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                <FaUsers className="Community-Icon" />
                <span>Community</span>
            </NavLink>
            <NavLink to="/profile" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                <FaUser className="User-Icon" />
                <span>Profile</span>
            </NavLink>
        </nav>
    );
}
