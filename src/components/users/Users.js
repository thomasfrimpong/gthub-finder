import React, { useContext } from "react";
import PropTypes from "prop-types";
import UserItem from "./UserItem";
import GithubContext from "../context/github/GithubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { users } = githubContext;

  return (
    <div style={userStyle}>
      {users.map((user) => (
        <UserItem user={user} key={user.id} />
      ))}
    </div>
  );
};
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
};

export default Users;
