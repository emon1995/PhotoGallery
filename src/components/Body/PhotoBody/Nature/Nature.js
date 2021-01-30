import React, { Component } from "react";
import PHOTOS from "../../../../data/photos";
import NatureItem from "./NatureItem";
import NaturePhotoDetail from "./NaturePhotoDetail";

class Nature extends Component {
  state = {
    photos: PHOTOS,
    selectedPhoto: null,
  };

  onPhotoSelect = (photo) => {
    console.log(photo);
    this.setState({ selectedPhoto: photo });
  };
  render() {
    document.title = "Nature";
    const nature = this.state.photos.map((item) => {
      return (
        <NatureItem
          photo={item}
          key={item.id}
          PhotoSelect={() => this.onPhotoSelect(item)}
        />
      );
    });

    let photoDetail = null;
    if (this.state.selectedPhoto != null) {
      photoDetail = <NaturePhotoDetail photo={this.state.selectedPhoto} />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">{nature}</div>
          <div className="col-6">{photoDetail}</div>
        </div>
      </div>
    );
  }
}

export default Nature;
