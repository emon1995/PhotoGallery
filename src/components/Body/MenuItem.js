import React from "react";
import {Card, CardImg, CardBody, CardTitle, CardImgOverlay} from "reactstrap";

const MenuItem = props => {
    return(
        <div>
            <Card style={{margin: "10px"}}>
                <CardBody>
                    <CardImg 
                    width="100%" 
                    alt={props.photo.name} 
                    src={props.photo.image}
                    style={{opacity: "0.5"}} 
                    />
                    <CardImgOverlay>
                        <CardTitle style={{cursor:"pointer"}}
                        onClick={props.onPhotoSelect}
                        >{props.photo.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    )
}

export default MenuItem;