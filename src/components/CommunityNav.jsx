import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CommunityNav() {
    return (
        <nav className="community-nav">
            <NavLink to="/community/dailyposts" activeClassName="active">Daily Posts</NavLink>
            <NavLink to="/community/articles" activeClassName="active">Articles</NavLink>
            <NavLink to="/community/discussions" activeClassName="active">Discussions</NavLink>
        </nav>
    );
}
