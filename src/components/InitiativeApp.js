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
        if (newPlayer.name === '' || newPlayer.bonus === '') {
            return 'A name and bonus must be entered.'
        }
        else if (this.state.players.find((existingPlayer) => {
            return existingPlayer.name === newPlayer.name;
        })){
            return 'Player already exists';
        } else if (isNaN(newPlayer.bonus)) {
            return 'Bonus must be a number';
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

    randomizeOrder = () => {
        this.setState((prevState) => (
            {battle_order: (prevState.players.map((player) => {
                return {
                    'name': player.name,
                    'bonus': player.bonus,
                    'roll': (Math.floor((Math.random() * 20) + 1))
                }
            })).sort((player1, player2) => {
                let player1Total = player1.roll + player1.bonus;
                let player2Total = player2.roll + player2.bonus;

                while (player1Total === player2Total) {
                    player1Total = (Math.floor((Math.random() * 20) + 1)) + player1.bonus;
                    player2Total = (Math.floor((Math.random() * 20) + 1)) + player2.bonus;
                }

                if (player1Total > player2Total) {
                    return -1;
                }
                else {
                    return 1;
                }
            })}
        ));
    }

    render() {
        console.log(this.state.battle_order);
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
                <RandomizeButton randomizeOrder={this.randomizeOrder}/>
            </div>
        );
    }
}