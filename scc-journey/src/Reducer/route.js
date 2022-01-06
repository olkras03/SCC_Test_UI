const defaultState = {
  history: [],
  currentPage: {},
  currentState: {},
  isValid: false,
  defaultHome: '/home'
};

const navigationReducer = (state = defaultState, action) => {

  const { type } = action;

  switch (type) {
    case 'ROUTE_NAVIGATE':
      state.history.push(action.payload.address);
      state.currentPage = action.payload.address;
      state.currentState = action.payload.value;
      state.isValid = true;
      return state;
    case 'NAVIGATE':
      state.currentPage = action.payload.address;
      state.currentState = action.payload.value;
      state.isValid = false;
      return state;
    default:
      return state;
  }

};

export default navigationReducer
