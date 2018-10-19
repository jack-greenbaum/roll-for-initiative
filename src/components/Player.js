import React from 'react';

const Player = ({player, handleDeletePlayer}) => (
    <div>
        {player.name} - {player.bonus}
        <button onClick={(e) => {
            e.preventDefault();
            handleDeletePlayer(player)
        }}>
            Remove
        </button>
    </div>
);

export default Player;