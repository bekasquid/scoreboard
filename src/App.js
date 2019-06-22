import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Player} from "./components/Player";

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', id: 1, score: 0},
      {name: 'HONG', id: 2, score: 0},
      {name: 'KIM', id: 3, score: 0},
      {name: 'PARK', id: 4, score: 0}
    ]
  }

  handleRemovePlayer = (id) => {
    console.log('remove player:', id);
    this.setState(prevState => ({
      players: prevState.players.filter(item => item.id !== id)
    }))
  }

  render() {
    return (
        <div className='scoreboard'>
          <Header title='My Scoreboard' totalPlayers={this.state.players.length} />
          { this.state.players.map(player => <Player name={player.name} id={player.id} score={player.score} key={player.id} removePlayer={this.handleRemovePlayer} />) }
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
