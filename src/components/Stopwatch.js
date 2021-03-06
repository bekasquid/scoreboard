import React from 'react';
import styles from "../pages/scoreboard/Scoreboard.module.css";

export class Stopwatch extends React.Component {
    tickRef;
    state = {
        timer: 0,
        isRunning: false
    }

    handleStopWatch = () => {
        this.setState(prevState => ({
            isRunning: !prevState.isRunning
        }))
    }

    handleReset = () => {
        this.setState({timer : 0, isRunning: false})
    }

    render() {
        return (
            <div className={styles.stopwatch}>
                <h2>StopWatch</h2>
                <span className={styles['stopwatch-time']}>{this.state.timer}</span>
                <button onClick={this.handleStopWatch}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }

    tick = () => {
        //isRunning이 true면 timer을 1씩 더한다
        if (this.state.isRunning) {
            this.setState(prevState => ({
                timer: prevState.timer + 1
            }))
        }
    }

    // Dom이 렌더링 된 직후에 호출되는 라이프사이클
    // 네트워크 호출, 3rd 라이브러리 로딩
    componentDidMount() {
        this.tickRef = setInterval(this.tick, 1000);
    }

    // Dom이 파괴되기 직전에 호출되는 라이프사이클
    // 리소스 해제 등
    componentWillUnmount() {
        clearInterval(this.tickRef);
    }
}