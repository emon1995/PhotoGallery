import React, {Component} from "react";
import {Button, Modal , CardColumns, ModalBody, ModalFooter } from "reactstrap";
import PHOTOS from "../../data/photos";
import COMMENTS from "../../data/comments";
import MenuItem from "./MenuItem";
import PhotoDetails from "./PhotoDetails";

class Menu extends Component {
    state = {
        photos : PHOTOS,
        comments : COMMENTS,
        selectedPhoto : null,
        modalOpen : false,
    }

    onPhotoSelect = photo => {
        this.setState({
             selectedPhoto : photo,
             modalOpen : !this.state.modalOpen,
             })
    }

    modalToggle = () => {
        this.setState({
            modalOpen : !this.state.modalOpen,
        })
    }

    render() {
        document.title = "Menu";
        const menu = this.state.photos.map(item => {
            return(
                <MenuItem 
                photo={item} 
                key={item.id}
                onPhotoSelect={() => this.onPhotoSelect(item)} / >
            );
        })

        let photoDetail = null;
        if(this.state.selectedPhoto != null){
            const comments = this.state.comments.filter(comment =>  comment.dishId === this.state.selectedPhoto.id
            )
            photoDetail = <PhotoDetails 
            photo={this.state.selectedPhoto}
            comments={comments}
             />
        }
        return(
            <div className="container">
                <div className="row">
                    <CardColumns>
                    {menu}
                    </CardColumns>
                    <Modal 
                    onClick={this.modalToggle}
                    isOpen={this.state.modalOpen}
                    >
                        <ModalBody>
                        {photoDetail}
                        </ModalBody>
                        <ModalFooter>
                            <Button 
                            color="secondary" 
                            onClick={this.modalToggle}>
                                Close
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default Menu;