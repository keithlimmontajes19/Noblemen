import { TYPES } from './actionTypes';

const INITIAL_STATE = {
  error: false,
  loading: false,
  authenticated: false,
  data: {},
  password_change: 0
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.GET_AUTHENTICATION_REQUEST:
      return {
        ...state,
        error: false,
        loading: true,
        authenticated: false
      };

    case TYPES.GET_AUTHENTICATION_SUCCESS:
      return {
        data: action.payload,
        error: false,
        loading: false,
        authenticated: true
      };

    case TYPES.GET_AUTHENTICATION_FAILED:
      return {
        data: action.payload,
        error: true,
        loading: false,
        authenticated: false
      };


    case TYPES.CHANGE_PASSWORD_SUCCESS:
    case TYPES.CHANGE_PASSWORD_FAILED:
      return {
        ...state,
        authenticated: false,
        password_change: action.payload
      };

    default:
      return { ...state };
  }
};

export default reducer;