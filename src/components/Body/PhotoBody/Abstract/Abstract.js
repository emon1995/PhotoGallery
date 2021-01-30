import React, { Component } from "react";
import PHOTOS from "../../../../data/photos";
import AbstractItem from "./AbstractItem";
import AbstractPhotoDetail from "./AbstractPhotoDetail";

class Abstract extends Component {
  state = {
    photos: PHOTOS,
    selectedPhoto: null,
  };

  onPhotoSelect = (photo) => {
    console.log(photo);
    this.setState({ selectedPhoto: photo });
  };
  render() {
    document.title = "Abstract";
    const abstract = this.state.photos.map((item) => {
      return (
        <AbstractItem
          photo={item}
          key={item.id}
          PhotoSelect={() => this.onPhotoSelect(item)}
        />
      );
    });

    let photoDetail = null;
    if (this.state.selectedPhoto != null) {
      photoDetail = <AbstractPhotoDetail photo={this.state.selectedPhoto} />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">{abstract}</div>
          <div className="col-6">{photoDetail}</div>
        </div>
      </div>
    );
  }
}

export default Abstract;
