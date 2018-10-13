import React from 'react';

const PartyMember = ({member, handleDeleteMember}) => (
    <div>
        {member.name} - {member.bonus}
        <button onClick={(e) => {
            e.preventDefault();
            handleDeleteMember(member)
        }}>
            Remove
        </button>
    </div>
);

export default PartyMember;