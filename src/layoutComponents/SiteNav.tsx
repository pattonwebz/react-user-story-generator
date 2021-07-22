import React, { CSSProperties } from 'react';
import { NavLink } from 'react-router-dom';
// import '../site-nav.css';

const SiteNav = () => {

    const activeStyleRules: CSSProperties = {
        fontWeight: 'bold',
        textDecoration: 'none'
    };

    return (
        <nav id="site-nav">
            <div className="site-title">
                <h1>User Story Generator</h1>
            </div>
            <ul className="nav">
                <li>
                    <NavLink
                        to="/"
                        activeStyle={activeStyleRules}
                        exact
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        activeStyle={activeStyleRules}
                    >
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default SiteNav;
