import * as ACTIONS from '../actions';

const initialState = {
  isLoadingData: false,
  smurfData: [],
  error: {},
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_SMURF_START:
      return {
        ...state,
        isLoadingData: true,
      };
    case ACTIONS.FETCH_SMURF_SUCCESS:
      return {
        ...state,
        isLoadingData: false,
        smurfData: action.payload,
        error: '',
      };
    case ACTIONS.FETCH_SMURF_FAILURE:
      return {
        ...state,
        isLoadingData: false,
        smurfData: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
