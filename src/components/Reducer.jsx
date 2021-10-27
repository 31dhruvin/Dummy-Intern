import {FETCH_INFO} from './Type'
const initialState = {
    info: []
  };
  
export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_MOVIE:
      return {
        ...state,
        info: action.payload,
        loading: false
      };
      default:
      return state;
  }
}