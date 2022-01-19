import React from "react";
import Signin from "./components/Signin";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Registration from "./components/Registration";
import "./App.css"
//  import PasswordShow from "./components/PasswordShow";
// import PasswordShow from "./components/PasswordShow";

function App() {
  return (
    
    <Router>
      {/* <PasswordShow/> */}
      <div className="App">
        <div class="container">
          <div class="column-one"></div>
          <div class="column-two">
            <ul class="menu-items">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sign-in">
                  Sign-In
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sign-up">
                  Sign-Up
                </Link>
              </li>
            </ul>
            {/* <PasswordShow/> */}
          </div>
        </div>
        <div>
          <Route
            path="/home"
            render={(props) => {
              return <Home {...props} />;
            }}
          />
          <Route path="/sign-in" component={Signin} />
        </div>
        <div>
          <Route path="/sign-up" component={Registration} />
        </div>
      </div>
    </Router>
  );
}

export default App;
