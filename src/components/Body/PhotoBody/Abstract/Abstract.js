import React, { Component } from "react";
import PHOTOS from "../../../../data/photos";
import AbstractItem from "./AbstractItem";
import AbstractPhotoDetail from "./AbstractPhotoDetail";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from "reactstrap";

class Abstract extends Component {
  state = {
    photos: PHOTOS,
    selectedPhoto: null,
    modalOpen: false,
  };

  onPhotoSelect = (photo) => {
    //console.log(photo);
    this.setState({ selectedPhoto: photo, modalOpen: !this.state.modalOpen });
  };

  togglerModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
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
          <CardColumns>{abstract}</CardColumns>
          <Modal isOpen={this.state.modalOpen}>
            <ModalBody>{photoDetail}</ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.togglerModal}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Abstract;
