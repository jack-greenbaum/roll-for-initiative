import React from 'react';
import PartyMember from './PartyMember';

const PartyList = ({party, handleDeleteMember}) => (
    <div>
        <h3>Party Members</h3>
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