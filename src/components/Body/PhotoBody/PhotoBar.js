import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Route, Switch } from "react-router";
import PhotoId from "./PhotoId";

const PhotoBar = (props) => {
  //console.log(props);
  return (
    <div>
      <ul className="mr-auto">
        <li>
          <Link
            exact
            to={`${props.match.path}/nature`}
            className="nav-link active"
          >
            Nature
          </Link>
        </li>
        <li>
          <Link
            exact
            to={`${props.match.path}/technology`}
            className="nav-link "
          >
            Technology
          </Link>
        </li>
        <li>
          <Link exact to={`${props.match.path}/design`} className="nav-link ">
            Design
          </Link>
        </li>
        <li>
          <Link exact to={`${props.match.path}/abstract`} className="nav-link ">
            Abstract
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default PhotoBar;
