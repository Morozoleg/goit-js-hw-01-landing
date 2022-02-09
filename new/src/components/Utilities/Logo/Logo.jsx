import React from "react";
import { Link } from "react-router-dom";
import classes from './Logo.module.less';

export default function Logo(props) {
  return (
    <div className={`${props.className || ""} logo ${classes.logo}`}>
      <Link to="/">
          <span/>
      </Link>
    </div>
  );
}
