import React, { Component } from "react";
import PHOTOS from "../../../../data/photos";
import NatureItem from "./NatureItem";
import NaturePhotoDetail from "./NaturePhotoDetail";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from "reactstrap";

class Nature extends Component {
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
          <CardColumns>{nature}</CardColumns>
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

export default Nature;
