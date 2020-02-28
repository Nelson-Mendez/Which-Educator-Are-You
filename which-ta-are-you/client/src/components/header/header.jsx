import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/wear-logo.svg';


export default function header () {
    return (
        <header className="header">
            <Link to="/">
                <img className="header__logo" src={logo}  alt="" />
            </Link>
        </header>
    )
}