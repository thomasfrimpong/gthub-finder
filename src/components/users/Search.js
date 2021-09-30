import React, { useState } from "react";

const Search = () => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target);
  };

  return (
    <div>
      <form className="form" onSubmit="onSubmit">
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
        <div>
          <button className="btn btn-block btn-light" type="button">
            Clear Users
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
