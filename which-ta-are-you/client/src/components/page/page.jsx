import React from 'react';
import Header from '../header'
import "./page.scss"

export default function (props) {
    return <main className="main">
        <Header className="header" />
        {props.children}
    </main>
}