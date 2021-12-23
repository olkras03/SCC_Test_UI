const initState = {
  component: '',
  page: '',
  product: '',
  style: '',
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {

    case 'CHANGE_COMPONENT':
      return {
        ...state,
        component: action.payload
      };

    case 'CHANGE_PAGE':
      return {
        ...state,
        page: action.payload
      };

    case 'CHANGE_PRODUCT':
      return {
        ...state,
        product: action.payload
      };

    case 'CHANGE_STYLE':
      return {
        ...state,
        style: action.payload
      };

    default:
      return state;
  }
};

export default rootReducer;
