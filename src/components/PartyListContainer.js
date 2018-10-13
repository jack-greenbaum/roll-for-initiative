import React from 'react';
import PartyList from './PartyList';
import AddMember from './AddMember';

const PartyListContainer = (props) => (
    <div>
        <PartyList
            party={props.party}
            title={props.title}
            handleDelete={props.handleDelete}
            handleDeleteAll={props.handleDeleteAll}
        />
        <AddMember handleAdd={props.handleAdd}/>
    </div>
);

export default PartyListContainer;