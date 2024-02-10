import React from "react";
import { Link, Outlet, Route, Routes, useParams } from "react-router-dom";
import AllCommets from "./AllCommets";

const Fullscreen = () => {
  const params = useParams();
  return (
    <>
      {" "}
      <div className="container bg-dark mt-5 ">
        <h1 className="text-white">detail pge</h1>
        <h1 className="text-white p-5">{params.quoteId}</h1>
      </div>
      <div className="container">
        <Link to="/fewscreen/commets">
          <button className="btn brtn-secondary ml-10">load commets</button>
        </Link>
        <Outlet />
      </div>
    </>
  );
};

export default Fullscreen;
