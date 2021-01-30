import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import AbstractLoadComment from "./AbstractLoadComment";

const AbstractPhotoDetail = (props) => {
  return (
    <div>
      <Card style={{ marginTop: "10px" }}>
        <CardImg top src={props.photo.image} alt={props.photo.name} />
        <CardBody style={{ textAlign: "left" }}>
          <CardTitle>{props.photo.name}</CardTitle>
          <CardText>{props.photo.description}</CardText>
          <hr />
          <AbstractLoadComment comments={props.photo.comments} />
        </CardBody>
      </Card>
    </div>
  );
};

export default AbstractPhotoDetail;
