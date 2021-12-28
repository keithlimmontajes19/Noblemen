import {TYPES} from './actionTypes';

const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false,
};

const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case TYPES.GET_AUTHENTICATION_REQUEST:
      return {
        data: [],
        error: false,
        loading: true,
      };

    case TYPES.GET_AUTHENTICATION_SUCCESS:
      return {
        data:action.payload,
        error: false,
        loading: false,
      };

    case TYPES.GET_AUTHENTICATION_FAILED:
      return {
        data: [],
        error: true,
        loading: false,
      };

    default:
      return { ...state };
  }
};

export default reducer;