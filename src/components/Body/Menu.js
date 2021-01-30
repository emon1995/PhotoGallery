import React, { Component } from "react";
import {
  Button,
  Modal,
  CardColumns,
  ModalBody,
  ModalFooter,
  Alert,
} from "reactstrap";
import MenuItem from "./MenuItem";
import PhotoDetails from "./PhotoDetails";
import { connect } from "react-redux";
import {
  addComment,
  fetchPhotos,
  fetchComments,
} from "../../redux/actionCreator";
import Loading from "./Loading";

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
    comments: state.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (photoId, author, comment) =>
      dispatch(addComment(photoId, author, comment)),
    fetchPhotos: () => dispatch(fetchPhotos()),
    fetchComments: () => dispatch(fetchComments()),
  };
};

class Menu extends Component {
  state = {
    selectedPhoto: null,
    modalOpen: false,
  };

  onPhotoSelect = (photo) => {
    this.setState({
      selectedPhoto: photo,
      modalOpen: !this.state.modalOpen,
    });
  };

  modalToggle = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };

  componentDidMount() {
    this.props.fetchPhotos();
    this.props.fetchComments();
  }

  render() {
    document.title = "Menu";
    if (this.props.photos.isLoading) {
      return <Loading />;
    } else if (this.props.photos.errMsg != null) {
      return <Alert color="danger">{this.props.photos.errMsg}</Alert>;
    } else {
      const menu = this.props.photos.photos.map((item) => {
        return (
          <MenuItem
            photo={item}
            key={item.id}
            onPhotoSelect={() => this.onPhotoSelect(item)}
          />
        );
      });

      let photoDetail = null;
      if (this.state.selectedPhoto != null) {
        const comments = this.props.comments.comments.filter(
          (comment) => comment.photoId === this.state.selectedPhoto.id
        );
        photoDetail = (
          <PhotoDetails
            photo={this.state.selectedPhoto}
            comments={comments}
            addComment={this.props.addComment}
            commentIsLoading={this.props.comments.isLoading}
          />
        );
      }
      return (
        <div className="container">
          <div className="row">
            <CardColumns>{menu}</CardColumns>
            <Modal isOpen={this.state.modalOpen}>
              <ModalBody>{photoDetail}</ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.modalToggle}>
                  Close
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
