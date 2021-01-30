import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Nature from "./PhotoBody/Nature/Nature";
import Design from "./PhotoBody/Design/Design";
import Abstract from "./PhotoBody/Abstract/Abstract";
import Technology from "./PhotoBody/Technology/Technology";
import { Nav, NavItem } from "reactstrap";

const About = (props) => {
  document.title = "About";
  //console.log(props);
  return (
    <>
      <div>
        <p>Category</p>
        <Nav vertical navbar>
          <NavItem>
            <Link to={`${props.match.path}/nature`} className="nav-link active">
              Nature
            </Link>
          </NavItem>
          <NavItem>
            <Link to={`${props.match.path}/technology`} className="nav-link ">
              Technology
            </Link>
          </NavItem>
          <NavItem>
            <Link to={`${props.match.path}/design`} className="nav-link ">
              Design{" "}
            </Link>
          </NavItem>
          <NavItem>
            <Link to={`${props.match.path}/abstract`} className="nav-link ">
              Abstract
            </Link>
          </NavItem>
        </Nav>
        <hr />
        <hr />
        <Switch>
          <Route path={`${props.match.path}/nature`} component={Nature} />
          <Route
            path={`${props.match.path}/technology`}
            component={Technology}
          />
          <Route path={`${props.match.path}/design`} component={Design} />
          <Route path={`${props.match.path}/abstract`} component={Abstract} />
        </Switch>
      </div>
    </>
  );
};

export default About;
