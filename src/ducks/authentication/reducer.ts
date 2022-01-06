import { TYPES } from './actionTypes';

const INITIAL_STATE = {
  error: false,
  loading: false,
  authenticated: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.GET_AUTHENTICATION_REQUEST:
      return {
        error: false,
        loading: true,
        authenticated: false
      };

    case TYPES.GET_AUTHENTICATION_SUCCESS:
      return {
        error: false,
        loading: false,
        authenticated: true
      };

    case TYPES.GET_AUTHENTICATION_FAILED:
      return {
        error: true,
        loading: false,
        authenticated: false
      };

    default:
      return { ...state };
  }
};

export default reducer;