import React, { Component } from "react";
import "./App.css";
import Profile from "./Components/Profile";
import Skills from "./Components/Skills";
import Gallery from "./Components/Gallery";

/* import Gallery from "./Components/Gallery"; */

class App extends Component {
  render() {
    return (
      <div className="forms centerElements">
        <div className="pageTitle centerElements">
          <h3>Controller</h3>
        </div>
        <Profile />
        <Skills />
        <Gallery />
      </div>
    );
  }
}

export default App;
