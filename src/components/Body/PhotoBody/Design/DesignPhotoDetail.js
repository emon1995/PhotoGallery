import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import DesignLoadComment from "./DesignLoadComment";

const DesignPhotoDetail = (props) => {
  return (
    <div>
      <Card style={{ marginTop: "10px" }}>
        <CardImg top src={props.photo.image} alt={props.photo.name} />
        <CardBody style={{ textAlign: "left" }}>
          <CardTitle>{props.photo.name}</CardTitle>
          <CardText>{props.photo.description}</CardText>
          <hr />
          <DesignLoadComment comments={props.photo.comments} />
        </CardBody>
      </Card>
    </div>
  );
};

export default DesignPhotoDetail;
