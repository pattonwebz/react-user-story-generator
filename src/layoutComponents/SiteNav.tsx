import React, { CSSProperties } from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
// import '../site-nav.css';

const SiteNav = () => {

    const activeStyleRules: CSSProperties = {
        fontWeight: 'bold',
        textDecoration: 'none'
    };

    const SiteNav = styled.nav`
        display: flex;
        background: beige;
        padding: 1rem 0.5rem;
    `;

    const SiteNavTitle = styled.div`
        align-self: center;

        h1 {
            margin: 0 1rem;
        }
    `;

    const SiteNavList = styled.ul`
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

    return (
        <SiteNav id="site-nav">
            <SiteNavTitle>
                <h1>User Story Generator</h1>
            </SiteNavTitle>
            <SiteNavList>
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
            </SiteNavList>
        </SiteNav>
    );
}

export default SiteNav;
