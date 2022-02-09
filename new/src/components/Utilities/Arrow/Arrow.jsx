import React from "react";
import classes from './Arrow.module.less';

function Arrow({ className }) {
  return (
    <span className={`${className || ""} ${classes.arrow}`}>
      <svg viewBox={"10 9 14 38"}>
        <line x1="17" y1="10" x2="17" y2="46" />
        <line x1="17" y1="10" x2="11" y2="16" />
        <line x1="23" y1="16" x2="17" y2="10" />
      </svg>
    </span>
  );
}

export default Arrow;
