import React from 'react';
import Header from './Header';
import PartyListContainer from './PartyListContainer';

export default class InitiativeApp extends React.Component {
    state = {
        party: [{'name': 'Bartible', 'bonus': 2},
                {'name': 'Cash', 'bonus': 1},
                {'name': 'Gilfred', 'bonus': 3}],
        opponents: [{'name': 'King Bullywog', 'bonus': 4},
                    {'name': 'Brian', 'bonus': 0},
                    {'name': 'Kobold Mage', 'bonus': 1}]
    }

    handleAddMember = (member) => {
        if (!member.name || !member.bonus) {
            return 'A name and bonus must be entered.'
        }
        else if (this.state.party.find((partyMember) => {
            return partyMember.name === member.name;
        })){
            return 'Party member already exists';
        }

        this.setState((prevState) => ({party: [...prevState.party, member]}));
    }

    handleAddOpponent = (member) => {
        if (!member.name || !member.bonus) {
            return 'A name and bonus must be entered.'
        }
        else if (this.state.party.find((partyMember) => {
            return partyMember.name === member.name;
        })){
            return 'Opponent already exists';
        }

        this.setState((prevState) => ({opponents: [...prevState.opponents, member]}));
    }

    handleDeletePartyMember = (member) => {
        this.setState((prevState) => ({party: prevState.party.filter((partyMember) => {
            return partyMember.name !== member.name;
        })}))
    }

    handleDeleteOpponent = (opponent) => {
        this.setState((prevState) => ({opponents: prevState.opponents.filter((opp) => {
            return opp.name !== opponent.name;
        })}))
    }

    handleDeleteParty = () => {
        this.setState(() => ({party: []}));
    }

    hanldeDeleteOpponents = () => {
        this.setState(() => ({opponents: []}));
    }

    render() {
        return (
            <div>
                <Header title="Roll for Initiative!"/>
                <PartyListContainer
                    party={this.state.party}
                    title='Party Members'
                    handleDelete={this.handleDeletePartyMember}
                    handleDeleteAll={this.handleDeleteParty}
                    handleAdd={this.handleAddMember}
                />
                <PartyListContainer
                    party={this.state.opponents}
                    title='Opponents'
                    handleDelete={this.handleDeleteOpponent}
                    handleDeleteAll={this.hanldeDeleteOpponents}
                    handleAdd={this.handleAddOpponent}
                />
            </div>
        );
    }
}