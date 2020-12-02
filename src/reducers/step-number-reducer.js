export default (state = 0, action ) => {
  switch (action.type){
    case 'MOVE':
      return action.stepNumber;
    case 'JUMP_TO':
      return action.stepNumber;
    default:
      return state;
  }
};