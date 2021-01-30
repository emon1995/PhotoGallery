import React, { Component } from "react";
import PHOTOS from "../../../../data/photos";
import DesignItem from "./DesignItem";
import DesignPhotoDetail from "./DesignPhotoDetail";

class Design extends Component {
  state = {
    photos: PHOTOS,
    selectedPhoto: null,
  };

  onPhotoSelect = (photo) => {
    console.log(photo);
    this.setState({ selectedPhoto: photo });
  };
  render() {
    document.title = "Design";
    const design = this.state.photos.map((item) => {
      return (
        <DesignItem
          photo={item}
          key={item.id}
          PhotoSelect={() => this.onPhotoSelect(item)}
        />
      );
    });

    let photoDetail = null;
    if (this.state.selectedPhoto != null) {
      photoDetail = <DesignPhotoDetail photo={this.state.selectedPhoto} />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">{design}</div>
          <div className="col-6">{photoDetail}</div>
        </div>
      </div>
    );
  }
}

export default Design;
