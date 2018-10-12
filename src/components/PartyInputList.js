import React from 'react';

const PartyInputList = ({party}) => (
    <div>
        <form>
            {party.map((member) => {
                return <input type='text' value={member} />
            })}
        </form>
    </div>
);

export default PartyInputList;