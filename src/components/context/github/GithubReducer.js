import {
  SEARCH_USERS,
  GET_USER,
  GET_REPOS,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT,
  CLEAR_USERS,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return { ...state, users: action.payload, loading: false };
    default:
      return state;
  }
};
