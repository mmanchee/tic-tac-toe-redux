export default (state = {}, action ) => {
  switch (action.type){
    case 'MOVE':
      return Object.assign({}, state, {
        [state.history.length]:{
          history: state.history,
          xIsNext: state.xIsNext,
          stepNumber: state.stepNumber,
        }
      });
    case 'JUMP_TO':
      return Object.assign({}, state, {
        [state.stepNumber]:{
          history: state.history,
          xIsNext: state.xIsNext,
          stepNumber: state.stepNumber,
        }
      });
    default:
      return state;
  }
} 