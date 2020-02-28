import React from 'react';
import Header from '../header'

export default function (props) {
    return <main>
        <Header />

        {props.children}
    </main>
}