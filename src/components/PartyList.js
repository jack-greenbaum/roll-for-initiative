import React from 'react';
import PartyMember from './PartyMember';

const PartyList = ({party, title, handleDelete, handleDeleteAll}) => (
    <div>
        <h3>{title}</h3>
        <button
            disabled={party.length === 0}
            onClick={handleDeleteAll}
        >
            Remove All
        </button>
        {!party.length && <p>Enter a fighter and their initiative bonus.</p>}
        {party.map((member) => {
            return (
                <PartyMember
                    member={member}
                    key={member.name}
                    handleDeleteMember={handleDelete}
                />
            );
        })}
    </div>
);

export default PartyList;