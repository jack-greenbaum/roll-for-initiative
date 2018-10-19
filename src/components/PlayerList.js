import React from 'react';
import Player from './Player';

const PlayerList = ({players, title, handleDelete, handleDeleteAll}) => (
    <div>
        <h3>{title}</h3>
        <button
            disabled={players.length === 0}
            onClick={handleDeleteAll}
        >
            Remove All
        </button>
        {!players.length && <p>Enter a fighter and their initiative bonus.</p>}
        {players.map((player) => {
            return (
                <Player
                    player={player}
                    key={player.name}
                    handleDeletePlayer={handleDelete}
                />
            );
        })}
    </div>
);

export default PlayerList;