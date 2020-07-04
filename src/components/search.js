import React from "react";

function Search (props) {
    return (
      <div className= "row">
        <div className = "col-4"></div>
        <div className = "col-4">
        <div className="searchbox">
          <div className="input-group">
              <div className="input-group-prepend">
                <button className="btn btn-dark" onClick={(event) => props.handleFormSubmit(event)} id="">
                  Search
                </button>
              </div>
              <input
              className="form-control mr-sm-2"
              
              onChange={props.handleInputChange}
              name = "firstName"
              type="text"
              placeholder="Name"
              aria-label="Search"
            />
            </div>
        </div>

        </div>
      </div>
      );
}

export default Search;