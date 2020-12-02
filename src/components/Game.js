import React from 'react';
import Board from './Board';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Game extends React.Component {

  constructor(props){
    super(props)
    // this.state = {
    //   history: [{
    //     squares: Array(9).fill(null),
    //   }],
    //   stepNumber: 0,
    //   xIsNext: true
    // };
  }
  
  handleClick(i) {
    console.log("props ", this.props);
    const history = this.props.history.slice(0, this.props.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if(calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.props.xIsNext ? 'X' : 'O';
    //
    const {dispatch} = this.props;
    const action = {
      type: "MOVE",
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.props.xIsNext,
    }
    dispatch(action);
    console.log('ddddddddd',action);
    console.log("props ", this.props);
  }

  jumpTo(step) {
    const {dispatch} = this.props;
    const action = {
      type: "JUMP_TO",
      history: this.props.history,
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    }
    dispatch(action);
    // this.setState({
    //   stepNumber: step,
    //   xIsNext: (step % 2) === 0,
    // });
  }

  render() {
    console.log('render props', this.props)
    const history = this.props.history;
    const current = history[this.props.stepNumber]
    const winner = calculateWinner(current.squares);
    
    const moves = history.map((step,move) => {
      const desc = move ?
      'Go to move #' + move :
      'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{ status }</div>
          <ol>{ moves }</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


Game.propTypes ={
  //test: PropTypes.object,
  history: PropTypes.array,
  xIsNext: PropTypes.bool,
  stepNumber: PropTypes.number
};

const mapStateToProps = state => {
  console.log("state map ", state);

  return {
    //test: state.history,
    history: state.history.history,
    xIsNext: state.history.xIsNext,
    stepNumber: state.history.stepNumber,
  }
}

Game = connect(mapStateToProps)(Game)

export default Game;