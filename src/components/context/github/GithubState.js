import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./GithubContext";
import GithubReducer from "./GithubReducer";

import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../../types";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //search Users
  const searchUsers = async (text) => {
    const res =
      await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
 &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        searchUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
