const initState = {
  component: '',
  page: 'Personal Details',
  product: 'Home',
  style: 'Default',
  risk: {
    contact: {},
    personalDetails: {},
  },
  config: {
    content: '',
    page: 'Contact',
    product: 'Home',
  },
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

    case 'CHANGE_CONFIG':
      return {
        ...state,
        config: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
