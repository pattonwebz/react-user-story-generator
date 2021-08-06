import React, { CSSProperties } from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
// import '../site-nav.css';

const SiteNavEl = styled.nav`
    display: flex;
    background: beige;
    padding: 1rem 0.5rem;
`;

const SiteNavTitleEl = styled.div`
    align-self: center;

    h1 {
        margin: 0 1rem;
    }
`;

const SiteNavListEl = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    align-self: center;

    li {
        flex: 0 0 0;
        margin-left: 1rem;
    }
`;

const activeStyleRules: CSSProperties = {
    fontWeight: 'bold',
    textDecoration: 'none'
};

const SiteNav = () => {

    return (
        <SiteNavEl id="site-nav">
            <SiteNavTitleEl>
                <h1>User Story Generator</h1>
            </SiteNavTitleEl>
            <SiteNavListEl>
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
            </SiteNavListEl>
        </SiteNavEl>
    );
}

export default SiteNav;
