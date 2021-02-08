import React from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo';
import Nav from '../Nav';

function Header() {
    return (
        <div className="ts-header ts-header__wrapper">
            <div className="ts-header__logo">
                <NavLink exact to="/">
                    <Logo />
                </NavLink>
            </div>
            <div className="ts-header__nav">
                <Nav />
            </div>
        </div>
    );
}

export default Header;