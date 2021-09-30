import React, { useState, useContext } from "react";
import AlertContext from "../context/alert/AlertContext";
import GithubContext from "../context/github/GithubContext";

const Search = () => {
  const [text, setText] = useState("");
  const githubContext = useContext(GithubContext);
  const { searchUsers, clearUsers } = githubContext;

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const onChange = (e) => {
    setText(e.target.value);
  };

  //submit form
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter a name", "light");
    } else {
      searchUsers(text);
    }
    setText(" ");
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          onChange={onChange}
          name="text"
          type="text"
          value={text}
          placeholder="Enter name.."
        />
        <input
          type="submit"
          value="Search Users..."
          className="btn btn-block btn-dark"
        />
        {githubContext.users.length > 0 && (
          <div>
            <button
              className="btn btn-block btn-light"
              type="button"
              onClick={clearUsers}
            >
              Clear Users
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Search;
