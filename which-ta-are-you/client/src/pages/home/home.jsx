import React from 'react';
import Page from '../../components/page';
import Hero from '../../components/hero';
import StartButton from  '../../components/start-button';

export default class Home extends React.Component {

    render () {

        return <Page >
            <Hero />
            <StartButton />
        </Page>
        
    }
}

