import React from "react";
import { Link } from "react-router-dom";

const AllQuote = ({ yehone }) => {
  return (
    <div className="container bg-secondary">
      <div className="row">
        <div className="col">
          <div className="row">
            <h1>{yehone.name}</h1>
          </div>
          <div className="row">
            <p>{yehone.text}</p>
          </div>
        </div>
        <div className="col">
          <Link to="/fullscreen">
            <button className="btn btn-lg btn-primary mt-3">
              View FullScreen
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllQuote;
