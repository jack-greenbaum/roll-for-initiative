import React from 'react';
import AddMember from './AddMember';
import PartyMember from './PartyMember';

const PartyList = ({party}) => (
    <div>
        <h3>Party Members</h3>
        {party.map((member) => {
            return <PartyMember member={member} />
        })}
        <AddMember />
    </div>
);

export default PartyList;