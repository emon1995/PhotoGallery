import React, { Component } from "react";
import PHOTOS from "../../../../data/photos";
import TechnologyItem from "./TechnologyItem";
import TechnologyPhotoDetail from "./TechnologyPhotoDetail";

class Technology extends Component {
  state = {
    photos: PHOTOS,
    selectedPhoto: null,
  };

  onPhotoSelect = (photo) => {
    console.log(photo);
    this.setState({ selectedPhoto: photo });
  };
  render() {
    document.title = "Technology";
    const technology = this.state.photos.map((item) => {
      return (
        <TechnologyItem
          photo={item}
          key={item.id}
          PhotoSelect={() => this.onPhotoSelect(item)}
        />
      );
    });

    let photoDetail = null;
    if (this.state.selectedPhoto != null) {
      photoDetail = <TechnologyPhotoDetail photo={this.state.selectedPhoto} />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">{technology}</div>
          <div className="col-6">{photoDetail}</div>
        </div>
      </div>
    );
  }
}

export default Technology;
