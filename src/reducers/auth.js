const defaultState = {
  inProgress: false,
  email: '',
  password: '',
  errors: null
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        inProgress: false,
        errors: action.error ? action.payload.errors : null
      }
    }

    case 'UPDATE_FIELD_AUTH': {
      return {
        ...state,
        [action.key]: action.value
      };
    }

    case 'ASYNC_START': {
      if (action.subtype === 'LOGIN') {
        return {
          ...state,
          inProgress: true
        };
      }

      return state;
    }

    default: return state;
  }

}
