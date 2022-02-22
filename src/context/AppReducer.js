const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ROLL':
      return {
        ...state,
        rolls: [action.payload, ...state.rolls],
      };
    default:
      return state;
  }
};
export default AppReducer;
