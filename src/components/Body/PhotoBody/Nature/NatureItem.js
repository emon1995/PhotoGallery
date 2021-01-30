import React from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from "reactstrap";

const NatureItem = (props) => {
  console.log(props);
  return (
    <div>
      <Card style={{ margin: "10px" }}>
        <CardBody>
          <CardImg
            width="100%"
            alt={props.photo.name}
            src={props.photo.image}
            style={{ opacity: "0.5" }}
          />
          <CardImgOverlay>
            <CardTitle>{props.photo.name}</CardTitle>
          </CardImgOverlay>
        </CardBody>
      </Card>
    </div>
  );
};

export default NatureItem;
