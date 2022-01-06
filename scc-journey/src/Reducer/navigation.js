const defaultState = {
  home: {
    title: 'Home',
    address: 'home',
    next: 'policy',
    questionSet: [],
  },
  policy: {
    title: 'Policy',
    address: 'policy',
    next: 'summary',
    questionSet: [
      { title: 'Name', type: 'meerstrap-address', name: 'policyName', props:[{'options': [{}]},  ] },
      { title: 'Surname', type: 'text', name: 'policySurname' },
      { title: 'Address', type: 'text', name: 'policyAddress' },
    ],
  },
  summary: {
    title: 'Summary',
    address: 'summary',
    next: 'home',
    questionSet: [
      { title: 'Name test', type: 'text', name: 'testName' },
      { title: 'test 1', type: 'text', name: 'testTest1' },
      { title: 'test 2', type: 'text', name: 'testTest2' },
    ],
  },
};

const navigationReducer = (state = defaultState, action) => {
  return state;
};

export default navigationReducer;
