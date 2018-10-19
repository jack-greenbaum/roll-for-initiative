import React from 'react';
import PlayerList from './PlayerList';
import AddPlayer from './AddPlayer';

const PlayerListContainer = (props) => (
    <div>
        <PlayerList
            players={props.players}
            title={props.title}
            handleDelete={props.handleDelete}
            handleDeleteAll={props.handleDeleteAll}
        />
        <AddPlayer handleAdd={props.handleAdd}/>
    </div>
);

export default PlayerListContainer;