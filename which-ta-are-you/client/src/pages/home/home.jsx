import React from 'react';
import { Link } from 'react-router-dom';
import Page from '../../components/page';
import Hero from '../../components/hero';
import StartButton from '../../components/start-button';

export default class Home extends React.Component {

    render() {

        return <Page >
            <Hero />
            <Link to="/quiz">
                {/* <button>Play now!</button> */}
                <StartButton />
            </Link>
        </Page>

    }
}

