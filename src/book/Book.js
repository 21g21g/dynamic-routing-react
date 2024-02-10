import React from "react";
import { Link, Outlet } from "react-router-dom";

const Book = () => {
  return (
    <div>
      <h1>hallo</h1>
      <div className="me-auto">
        <Link className="nav-link" to="/book/book1">
          book1
        </Link>
        <Link className="nav-link" to="/book/book2">
          book2
        </Link>
        <Link className="nav-link" to="/book/book3">
          book3
        </Link>
        <Outlet />
      </div>
    </div>
  );
};

export default Book;
