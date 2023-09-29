import React, { useState } from "react";

function Header({ setSearch }) {
  const [input, setInput] = useState("");
  const onSub = (e) => {
    e.preventDefault();
    setSearch(input);
  };

  return (
    <>
      <div className="container">
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            id="search"
            onChange={(e) => setInput(e.target.value)}
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            onClick={onSub}
            type="submit"
          >
            Search
          </button>
        </form>
        OR
        <form className="form-inline my-2 my-lg-0">
        <div className="input-group mb-3">
          <select className="custom-select" id="inputGroupSelect01">
            <option selected>---select backend----</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <select className="custom-select" id="inputGroupSelect01">
            <option selected>---select frontend----</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <select className="custom-select" id="inputGroupSelect01">
            <option selected>---select database----</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            onClick={onSub}
            type="submit"
          >
            Search
          </button>
        </div>
        
        </form>
      </div>
    </>
  );
}

export default Header;
