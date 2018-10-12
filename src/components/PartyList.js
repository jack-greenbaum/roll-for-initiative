import React from 'react';
import PartyMember from './PartyMember';

const PartyList = ({party}) => (
    <div>
        <h3>Party Members</h3>
        {party.map((member) => {
            return <PartyMember member={member} />
        })}
    </div>
);

export default PartyList;