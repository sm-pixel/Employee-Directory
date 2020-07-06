import React from "react";

function Search(props) {
  return (
    <div className="row">
      <div className="col-3"></div>
      <div className="col-6">
        <div className="searchbox">
          <div className="input-group">
            <input
              className="form-control"

              onChange={props.handleEmployee}
              name="firstName"
              type="text"
              placeholder="Name"
              label="Search"
            />
            <div className="input-group-prepend">
              <button className="btn btn-dark" onClick={(event) => props.handleSearch(event)} id="">
                Search
                </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Search;