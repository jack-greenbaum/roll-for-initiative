import React from 'react';
import Header from './Header';
import PartyInputList from './PartyInputList';

export default class InitiativeApp extends React.Component {
    state = {
        party: ['Bartible']
    }

    render() {
        return (
            <div>
                <Header title="Roll for Initiative!"/>
                <PartyInputList party={this.state.party}/>
            </div>
        );
    }
}