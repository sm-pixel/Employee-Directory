import React from "react";


function Header(props) {
  return (
    <div className="jumbotron danger">
      <h1 className="display-2">Employee Directory</h1>
      <hr className="my-4" />
      <p className="lead">
        Search below to find employees by name
      </p>
    </div>
  );
}

export default Header;