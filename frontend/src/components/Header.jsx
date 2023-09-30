import React, { useState } from "react";
import  './style.css'
function Header({ setSearch }) {
  const [input, setInput] = useState("");
  const [tech_val, setTech_val] = useState("")
  const [front_val, setfront_val] = useState("")
  const [back_val, setback_val] = useState("")
  const [dataBase, setdataBase] = useState("")
  const [infra_val, setinfra_val] = useState("")

  const onSub = (e) => {
    e.preventDefault();
    setSearch(input);
  };

  return (
    
    <>
    
   
      <div className="container">
        <h1 className="textCenter">SHL Assignment</h1>
        <hr />
        <form className="searchField form-inline my-2 my-lg-0">
          <input
            className="col-lg-9 mt-3 form-control mr-sm-2"
            id="search"
            onChange={(e) => setInput(e.target.value)}
            type="search"
            placeholder="Search"
            aria-label="Search"
            required
          />
          <button
            className="mt-3 col-sm-12 col-lg-1 btn btn-outline-success my-sm-0 submitButton" style={{'marginTop': '1rem !important'}}
            onClick={onSub}
            type="submit"
          >
            Search
          </button>
        </form>
        <div className="horizantal1"></div>
        {/* <div className="searchField "> <b>OR</b></div>
        <div className="horizantal1"></div>
        <form className="Form2 pt-12 form-inline my-2 my-lg-0">
          <div className="row">
        <div className="col-lg-12 searchField input-group mb-3">
          <select value={tech_val} onChange={e=>{setTech_val(e.target.value)}} className="col-lg-2 col-sm-12 custom-select width-size" id="inputGroupSelect01">
            <option value="0" selected>---Select Technology----</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>&nbsp;&nbsp;&nbsp;

          <select value={front_val} onChange={e=>{setfront_val(e.target.value)}} className="col-lg-2 col-sm-12 custom-select width-size" id="inputGroupSelect01">
            <option value="" selected>---Select Frontend----</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>&nbsp;&nbsp;&nbsp;

          <select value={back_val} onChange={e=>{setback_val(e.target.value)}} className="col-lg-2 col-sm-12 custom-select width-size" id="inputGroupSelect01">
            <option value="" selected>---Select Backend----</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>&nbsp;&nbsp;
          <select value={dataBase} onChange={e=>{setdataBase(e.target.value)}} className="col-lg-2 col-sm-12 custom-select width-size" id="inputGroupSelect01">
            <option selected>---Select Database----</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>&nbsp;&nbsp;
          <select value={infra_val} onChange={e=>{setinfra_val(e.target.value)}} className="col-lg-2 col-sm-12 custom-select width-size" id="inputGroupSelect01">
            <option selected>---Select Infrastructure----</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>&nbsp;&nbsp;
          <button
            className="btn col-sm-12 col-lg-1 btn-outline-success my-2 my-sm-0"
            onClick={onSub}
            type="submit"
          >
            Search
          </button>
        </div>
        </div>
        </form> */}
      </div>
    </>
  );
}

export default Header;
