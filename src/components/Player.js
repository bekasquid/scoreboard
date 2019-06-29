import React from 'react';
import {Counter} from "./Counter";

export class Player extends  React.PureComponent {
    render() {
        console.log(this.props.name, ' rendered');
        return (
            <div className="player">
                <span className="player-name">
                  <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>X</button>
                    {this.props.name}
                </span>
                <Counter score={this.props.score} id={this.props.id} changeScore={this.props.changeScore} />
            </div>
        )
    }
    componentWillReceiveProps(nextProps, nextContext) {
        // console.log('componentWillReceiveProps', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(nextProps, nextState);
        return nextProps.score !== this.props.score;
    }
}

// export const Player = (props) => {
//     console.log(props.name, ' rendered');
//     return (
//         <div className='player'>
//         <span className='player-name'>
//             <button className="remove-player" onClick={() => props.removePlayer(props.id)}>X</button>
//             {props.name}
//         </span>
//             <Counter id={props.id} score={this.props.score} changeScore={props.changeScore} />
//         </div>
//     )
// }
