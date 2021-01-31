import React, { Component } from "react";
import PHOTOS from "../../../../data/photos";
import DesignItem from "./DesignItem";
import DesignPhotoDetail from "./DesignPhotoDetail";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from "reactstrap";

class Design extends Component {
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
          <CardColumns>{design}</CardColumns>
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

export default Design;
