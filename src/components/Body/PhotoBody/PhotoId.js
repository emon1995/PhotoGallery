import React from "react";
import { useParams } from "react-router";

const PhotoId = () => {
  let { PhotoId } = useParams();
  return (
    <div>
      <h3>{PhotoId}</h3>
    </div>
  );
};

export default PhotoId;
