let initialState = {
  input: '',
  data: {},
}

const storeInput = (state = initialState, action) => {
  let newState = null;
  switch (action.type) {
    case 'STORE_INPUT':
      newState = Object.assign({}, state, {input: action.input});
      return newState;

    case 'STORE_WEATHER_DATA':
      newState = Object.assign({}, state, {data: action.data});
      return newState;

    case 'INVALID_STATE':
    newState = Object.assign({}, state, {input: action.error, data: {}});
    return newState;      

    default:
      return initialState;
  }
}

export default storeInput;