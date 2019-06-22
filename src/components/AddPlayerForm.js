import React from 'react';

export class AddPlayerForm extends React.Component {

    state = {
        value: ''
    }

    handleChange = (e) => {
        // console.log(e.target.value)
        this.setState({value: e.target.value})
    }

    render() {
        return (
            <form className="form">
                <input className="input" type="text" placeholder="enter a player's name" value={this.state.value} onChange={this.handleChange} />
                <input className="input" type="submit" value="Add Player" />
            </form>
        );
    }
}