import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Works from "../works/works";
import Bio from "../bio/bio";
import Newsletter from "../newsletter/newsletter";
import Contact from "../contact/contact";
import "./tabs.css";

class Tabs extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul className="tabStyles" style={tabStyles}>
            <li>
              <Link to="/">WORKS</Link>
            </li>
            <li>
              <Link to="/bio">BIO</Link>
            </li>
            {/* <li>
              <Link to="/newsletter">NEWSLETTER</Link>
            </li> */}
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>

          <Route exact path="/" component={Works} />
          <Route exact path="/bio" component={Bio} />
          {/* <Route exact path="/newsletter" component={Newsletter} /> */}
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

const tabStyles = {
  backgroundColor: "black",
  padding: 15,
  margin: 0,
  opacity: 0.7
};

export default Tabs;
