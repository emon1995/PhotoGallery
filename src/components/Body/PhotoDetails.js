import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import LoadComment from "./LoadComment";
import CommentForm from "./CommentForm";
import { baseUrl } from "../../redux/baseUrl";

const PhotoDetails = (props) => {
  return (
    <div>
      <Card style={{ marginTop: "10px" }}>
        <CardImg top src={baseUrl + props.photo.image} alt={props.photo.name} />
        <CardBody style={{ textAlign: "left" }}>
          <CardTitle>{props.photo.name}</CardTitle>
          <CardText>{props.photo.description}</CardText>
          <hr />
          <LoadComment
            comments={props.comments}
            commentIsLoading={props.commentIsLoading}
          />
          <hr />
          <CommentForm photoId={props.photo.id} addComment={props.addComment} />
        </CardBody>
      </Card>
    </div>
  );
};

export default PhotoDetails;
