import React from 'react';

export class Counter extends React.Component {

    constructor() {
        super();
        // this.state = {
        //     score: 0,
        //     time: 10
        // };
        //this.incrementScore = this.incrementScore.bind(this);
    }

    // 애로우펑션안의 this는 lexical this로써 자기자신을 가리키게 된다.
    handleScore = (delta) => {
        console.log('increment:', this);
        //this.state.score += 1;
        //setState를 호출해야만 UI 렌더링이 된다.
        this.setState(prevState => {
            return {score: prevState.score + delta}
        })
    }

    render() {
        return (
            <div className='counter'>
                <button className='counter-action decrement' onClick={() => this.handleScore(-1)}>-</button>
                <span className='counter-score'>{this.props.score}</span>
                <button className='counter-action increment' onClick={() => this.handleScore(1)}>+</button>
            </div>
        )
    }
}