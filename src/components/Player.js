import React from 'react';
import Counter from "./Counter";
import {removePlayer} from "../redux/actions";
import {connect} from "react-redux";
import styles from "../pages/scoreboard/Scoreboard.module.css";

class Player extends React.Component {
    render() {
        console.log(this.props.name, ' rendered');
        const {removePlayer, id, name, score, changeScore} = this.props;

        return (
            <div className={styles.player}>
    <span className={styles['player-name']}>
      <button className={styles['remove-player']} onClick={() => removePlayer(id)}>X</button>
        {name}
    </span>
                <Counter score={score} id={id} />
            </div>
        )
    }

    componentWillReceiveProps(nextProps, nextContext) {
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(nextProps, nextState);
        return nextProps.score !== this.props.score;
    }
}

// 액션을 디스패치하는 펑션을 props로 매핑
const mapActionToProps = (dispatch) => ({
    removePlayer: (id) => dispatch(removePlayer(id))
})

export default connect(null, mapActionToProps)(Player);