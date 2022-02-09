import React from "react";
import { Link } from "react-router-dom";
import classes from "./NotFound.module.less";
import { useHistory } from "react-router-dom";

export default function NotFound() {
  const history = useHistory();
  return (
    <div className={`${classes.notFound}`}>
      <div className="container">
        <h1>404 Not Found</h1>
        <Link to="/" className="btn btn-dark">
          Go to main page
        </Link>
        <button className="btn btn-dark" onClick={history.goBack}>
          Go Back
        </button>
      </div>
    </div>
  );
}
