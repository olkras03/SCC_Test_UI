const defaultState = {
  home: {},
  policy: {},
  summary: {},
};

const riskReducer = (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CHANGE_INPUT':
      const address = payload.address;
      const update = payload.update;
      const currentRisk = {
        ...state[address],
        ...update,
      }

      state[address] = currentRisk
  }

  return state;
};

export default riskReducer;
