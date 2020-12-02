export default (state = {}, action ) => {
  console.log('reducer ', action)
  switch (action.type){
    case 'MOVE':
      console.log("action ", action);
      return Object.assign({}, state, {
        [action.history.length]:{
          history: action.history,
          xIsNext: action.xIsNext,
          stepNumber: action.stepNumber,
        }
      });
    case 'JUMP_TO':
      return Object.assign({}, state, {
        [action.stepNumber]:{
          history: action.history,
          xIsNext: action.xIsNext,
          stepNumber: action.stepNumber,
        }
      });
    default:
      return state;
  }
};