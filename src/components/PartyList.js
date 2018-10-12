import React from 'react';
import PartyMember from './PartyMember';

const PartyList = ({party}) => (
    <div>
        <h3>Party Members</h3>
        <form>
            {party.map((member) => {
                return <PartyMember member={member} />
            })}
        </form>
    </div>
);

export default PartyList;