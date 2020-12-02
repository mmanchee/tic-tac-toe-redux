export default (state = true, action ) => {
  switch (action.type){
    case 'MOVE':
      return action.xIsNext;
    case 'JUMP_TO':
      return action.xIsNext;
    default:
      return state;
  }
};