import React from 'react';
import Header from './components/Header';
import './App.css';
import Player from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";
import {connect} from "react-redux";

class App extends React.Component {
  maxId = 4;

  handleRemovePlayer = (id) => {
    console.log('remove player: ', id);

    this.setState(prevState => ({
      players: prevState.players.filter(item => item.id !== id)
    }))
  }

  handleAddPlayer = (name) => {
    console.log('add player name: ', name);
    this.setState(prevState => {
      prevState.players.push({
        name,
        id: ++this.maxId,
        score: 0
      });
      return {
        players: [...prevState.players]
      }
    })
  }

  render() {
    return (
        <div className="scoreboard">
          <Header players={this.props.players} />

          {
            this.props.players.map(player => (
                <Player key={player.id}
                        name={player.name} id={player.id} score={player.score}
                        removePlayer={this.handleRemovePlayer} />
            ))
          }

          <AddPlayerForm />
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  // 왼쪽은 props, 오른쪽은 state
  players: state.playerReducer.players
})

// 커링 펑션, HoC
export default connect(mapStateToProps, null)(App);
