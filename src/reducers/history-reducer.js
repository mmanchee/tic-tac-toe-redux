export default (state = [{
      squares: Array(9).fill(null),
    }], action ) => {
  switch (action.type){
    case 'MOVE':
      return action.history;
    case 'JUMP_TO':
      return action.history;
    default:
      return state;
  }
};