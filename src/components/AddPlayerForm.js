import React from 'react';
import {addPlayer} from "../redux/actions";
import {connect} from "react-redux";

class AddPlayerForm extends React.Component {
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

const mapActionToProps = (dispatch) => ({
    addPlayer: (name) => dispatch(addPlayer(name))
})

// 커링 펑션, HoC
export default connect(null, mapActionToProps)(AddPlayerForm);
