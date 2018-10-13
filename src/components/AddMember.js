import React from 'react';

export default class AddMember extends React.Component {
    state = {
        error: undefined
    }

    handleAdd = (e) => {
        e.preventDefault();

        const member = {
            name: e.target.elements.name.value.trim(),
            bonus: e.target.elements.bonus.value.trim()
        }
        const error = this.props.handleAdd(member);

        this.setState(() => ({error}));

        if (!error) {
            e.target.elements.name.value = '';
            e.target.elements.bonus.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAdd}>
                    <input type='text' name="name"/>
                    <input type='text' name="bonus"/>
                    <button type='submit'>Add Member</button>
                </form>
            </div>
        );
    }
};
