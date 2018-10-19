import React from 'react';
import Header from './Header';
import PlayerListContainer from './PlayerListContainer';
import RandomizeButton from './RandomizeButton';

export default class InitiativeApp extends React.Component {
    state = {
        players: [{'name': 'Bartible', 'bonus': 2},
                {'name': 'Cash', 'bonus': 1},
                {'name': 'Gilfred', 'bonus': 3}],
        battle_order: []
    }

    handleAddPlayer = (newPlayer) => {
        if (!newPlayer.name || !newPlayer.bonus) {
            return 'A name and bonus must be entered.'
        }
        else if (this.state.players.find((existingPlayer) => {
            return existingPlayer.name === newPlayer.name;
        })){
            return 'Player already exists';
        }

        this.setState((prevState) => ({players: [...prevState.players, newPlayer]}));
    }

    handleDeletePlayer = (playerToDelete) => {
        this.setState((prevState) => ({players: prevState.players.filter((existingPlayer) => {
            return existingPlayer.name !== playerToDelete.name;
        })}))
    }

    handleDeletePlayers = () => {
        this.setState(() => ({players: []}));
    }

    render() {
        return (
            <div>
                <Header title="Roll for Initiative!"/>
                <PlayerListContainer
                    players={this.state.players}
                    title='Players'
                    handleDelete={this.handleDeletePlayer}
                    handleDeleteAll={this.handleDeletePlayers}
                    handleAdd={this.handleAddPlayer}
                />
                <RandomizeButton />
            </div>
        );
    }
}