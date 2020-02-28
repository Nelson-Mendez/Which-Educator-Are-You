import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/wear-logo.svg';
import "./header.scss";


export default function header() {
    return (
        <header className="header">
            <Link to="/" className="header__wrapper">
                <img className="header__logo" src={logo} alt="" />
            </Link>
        </header>
    )
}