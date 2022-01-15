import React, { Component } from "react";
import { Fragment } from "react/cjs/react.production.min";

class Gallery extends Component {
  render() {
    return (
      <Fragment>
        <div className="gallerySection centerElements">
          <form className="submitGallery centerElements">
            <div className=" title centerElements">
              <h5>Gallery Section</h5>
            </div>
            <input placeholder="Image Link" />
            <input placeholder="Description" />
            <div className="buttonSection centerElements">
              <button>UPDATE</button>
              <button>ADD</button>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default Gallery;
