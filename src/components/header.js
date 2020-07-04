import React from "react";


function Header(props) {
  return (
    <div className="jumbotron">
      <h1 className="display-2">Employee Directory</h1>
      <hr className="my-4" />
      <p className="lead">
        Search below to find employees by name
      </p>
      <p className="lead">
        Click Name to sort by last name
      </p>
    </div>
  );
}

export default Header;