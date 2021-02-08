import React from 'react';
import './style.scss';

import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="ts-nav ts-nav__wrapper">
            <ul className="ts-nav__list">
                <li className="ts-nav__list-item">
                    <NavLink exact to="/" className="ts-nav__link" activeClassName="ts-nav__link--active">home</NavLink>
                </li>
                <li className="ts-nav__list-item">
                    <NavLink to="/new-post" className="ts-nav__link" activeClassName="ts-nav__link--active">new post</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;