import * as types from '../actions/actionTypes';
import initialstate from './initialState';

export default function authorReducer(state = initialstate.authors, action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
