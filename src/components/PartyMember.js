import React from 'react';

const PartyMember = ({member}) => (
    <div>{member.name} - {member.bonus}</div>
);

export default PartyMember;