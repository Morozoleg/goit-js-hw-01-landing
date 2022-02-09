import React from "react";
import classes from "./Spinner.module.less";

function Spinner(props) {
  return (
    <div className={`${classes.loader} ${props.className || ""}`}>
      Loading...
    </div>
  );
}

export default Spinner;
