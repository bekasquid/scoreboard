import React from 'react';
import {Counter} from "./Counter";

export const Player = (props) => (
    <div className='player'>
        <span className='player-name'>
            <button className="remove-player" onClick={() => props.removePlayer(props.id)}>X</button>
            {props.name}
        </span>
        <Counter id={props.id} score={props.score} changeScore={props.changeScore} />
    </div>
)