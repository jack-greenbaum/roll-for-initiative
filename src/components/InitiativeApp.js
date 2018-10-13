import React from 'react';
import AddMember from './AddMember';
import Header from './Header';
import PartyList from './PartyList';

export default class InitiativeApp extends React.Component {
    state = {
        party: [{'name': 'Bartible', 'bonus': 2},
                {'name': 'Cash', 'bonus': 1},
                {'name': 'Gilfred', 'bonus': 3}]
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

    handleDeleteMemeber = (member) => {
        this.setState((prevState) => ({party: prevState.party.filter((partyMember) => {
            return partyMember.name !== member.name;
        })}))
    }

    render() {
        return (
            <div>
                <Header title="Roll for Initiative!"/>
                <PartyList
                    party={this.state.party}
                    handleDeleteMember={this.handleDeleteMemeber}
                />
                <AddMember handleAddMember={this.handleAddMember}/>
            </div>
        );
    }
}