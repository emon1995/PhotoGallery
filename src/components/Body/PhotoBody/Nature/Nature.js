import React, { Component } from "react";
import PHOTOS from "../../../../data/photos";
import NatureItem from "./NatureItem";

class Nature extends Component {
  state = {
    photos: PHOTOS,
  };
  render() {
    document.title = "Nature";
    const nature = this.state.photos.map((item) => {
      return <NatureItem photo={item} key={item.id} />;
    });
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">{nature}</div>
        </div>
      </div>
    );
  }
}

export default Nature;
