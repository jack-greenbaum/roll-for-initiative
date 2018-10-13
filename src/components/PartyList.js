import React from 'react';
import PartyMember from './PartyMember';

const PartyList = ({party, handleDeleteMember, handleDeleteAll}) => (
    <div>
        <h3>Party Members</h3>
        <button
            disabled={party.length === 0}
            onClick={handleDeleteAll}
        >
            Remove All
        </button>
        {!party.length && <p>Enter a party member and their initiative bonus.</p>}
        {party.map((member) => {
            return (
                <PartyMember
                    member={member}
                    key={member.name}
                    handleDeleteMember={handleDeleteMember}
                />
            );
        })}
    </div>
);

export default PartyList;