import React from 'react';
import {Counter} from "./Counter";

export class Player extends  React.PureComponent {
    render() {
        return (
            <div className='player'>
                <span className='player-name'>
                    <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>X</button>
                    {this.props.name}
                </span>
                <Counter id={this.props.id} score={this.props.score} changeScore={this.props.changeScore} />
            </div>
        )
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