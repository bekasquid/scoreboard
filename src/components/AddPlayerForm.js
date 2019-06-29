import React from 'react';

export class AddPlayerForm extends React.Component {
    textInput = React.createRef();

    // state = {
    //     value: ''
    // }
    //
    // handleChange = (e) => {
    //     // console.log(e.target.value)
    //     this.setState({value: e.target.value})
    // }

    handleSubmit = (e) => {
        //기본이벤트 (페이지 재로딩) 막기
        e.preventDefault();
        this.props.addPlayer(this.textInput.current.value);
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <input className="input" type="text" placeholder="enter a player's name" ref={this.textInput} /*value={this.state.value} onChange={this.handleChange}*/ />
                <input className="input" type="submit" value="Add Player" />
            </form>
        );
    }
}