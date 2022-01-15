import React, { Component } from "react";
import { Fragment } from "react/cjs/react.production.min";

class Profile extends Component {
  render() {
    return (
      /*   <> */
      <Fragment>
        <form className="submitProfile centerElements">
          <div className=" title centerElements">
            <h5>Profile Section</h5>
          </div>
          <input placeholder="username" />
          <input placeholder="title" />
          <input placeholder="description" />
          <input placeholder="userImage link" />
          <div className="buttonSection centerElements">
            <button>UPDATE</button>
          </div>
        </form>
      </Fragment>
      /* </> */
    );
  }
}

export default Profile;
