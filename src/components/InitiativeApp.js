import React from 'react';
import Header from './Header';
import PartyList from './PartyList';

export default class InitiativeApp extends React.Component {
    state = {
        party: [{'name': 'Bartible', 'bonus': 2},
                {'name': 'Cash', 'bonus': 1},
                {'name': 'Gilfred', 'bonus': 3}]
    }

    render() {
        return (
            <div>
                <Header title="Roll for Initiative!"/>
                <PartyList party={this.state.party}/>
            </div>
        );
    }
}