import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Player} from "./components/Player";
import {AddPlayerForm} from "./components/AddPlayerForm";

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', id: 1, score: 0},
      {name: 'HONG', id: 2, score: 0},
      {name: 'KIM', id: 3, score: 0},
      {name: 'PARK', id: 4, score: 0}
    ]
  }
  maxId = this.state.players.length;

  handleRemovePlayer = (id) => {
    console.log('remove player:', id);
    this.setState(prevState => ({
      players: prevState.players.filter(item => item.id !== id)
    }))
  }

  /*
    * 스코어를 변경시키는 함수
    * @param id : 플레이어 아이디
    * @param delta 증가면 1 감소면 -1
  */
  handleChangeScore = (id, delta) => {
      // console.log("change Score", id, delta);
      this.setState(prevState => {
        prevState.players.forEach(player => {
          if (player.id === id) {
            player.score += delta;
          }
        })
        return {players: [...prevState.players]}
      })
  }

  handleAddPlayer = (name) => {
    console.log('add player name:', name);
    this.setState(prevState => {
      prevState.players.push({
        name,
        id: ++this.maxId,
        score: 0
      })
      return {
        players: [...prevState.players]
      }
    })
  }

  render() {
    return (
        <div className='scoreboard'>
          <Header players={this.state.players} />
          { this.state.players.map(player =>
              <Player name={player.name}
                       id={player.id}
                       score={player.score}
                       key={player.id}
                       removePlayer={this.handleRemovePlayer}
                       changeScore={this.handleChangeScore} />
              ) }
          <AddPlayerForm addPlayer={this.handleAddPlayer} />
        </div>
    )
  }
}


// function Header(){
//     return (
//         <header className='header'>
//             <h1 className='h1'>ScoreBoard</h1>
//             <span className='stats'>Players : 1</span>
//         </header>
//     )
// }

// ReactDOM.render(<App />, document.getElementById('root'));

export default App;
