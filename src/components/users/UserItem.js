import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className="card text-center">
      <img src={avatar_url} className="round-img" style={{ width: "60px" }} />
      <h3>{login}</h3>
      <div>
        <button className="btn btn-dark">
          <Link to={`/users/${login}`} className="btn btn-dark btn-sm my-1">
            More
          </Link>
        </button>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  login: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
};

export default UserItem;
