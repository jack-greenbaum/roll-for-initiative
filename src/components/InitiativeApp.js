import React from 'react';
import Header from './Header';
import PartyInput from './PartyInput';

export default class InitiativeApp extends React.Component {
    state = {
        party: []
    }
    render() {
        return (
            <div>
                <Header title="Roll for Initiative!"/>
                <PartyInput />
            </div>
        );
    }
}