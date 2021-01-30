import * as actionTypes from "./actionTypes";
import { baseUrl } from "./baseUrl";
import axios from "axios";

export const addComment = (photoId, author, rating, comment) => (dispatch) => {
  const newComment = {
    photoId: photoId,
    author: author,
    rating: rating,
    comment: comment,
  };
  newComment.date = new Date().toISOString();

  axios
    .post(baseUrl + "comments", newComment)
    .then((response) => response.data)
    .then((comment) => dispatch(commentConcat(comment)));
};

export const commentConcat = (comment) => ({
  type: actionTypes.ADD_COMMENT,
  payload: comment,
});

export const loadComments = (comments) => ({
  type: actionTypes.LOAD_COMMENTS,
  payload: comments,
});

export const commentLoading = () => ({
  type: actionTypes.COMMENT_LOADING,
});

export const fetchComments = () => (dispatch) => {
  dispatch(commentLoading());

  axios
    .get(baseUrl + "comments")
    .then((response) => response.data)
    .then((comments) => dispatch(loadComments(comments)));
};

export const loadPhotos = (photos) => ({
  type: actionTypes.LOAD_PHOTOS,
  payload: photos,
});

export const photosLoading = () => ({
  type: actionTypes.PHOTOS_LOADING,
});

export const photosFailed = errMsg => ({
  type: actionTypes.PHOTOS_FAILED,
  payload: errMsg,
});

export const fetchPhotos = () => {
  return (dispatch) => {
    dispatch(photosLoading());

    axios
      .get(baseUrl + "photos")
      .then((response) => response.data)
      .then((photos) => dispatch(loadPhotos(photos)))
      .catch(error => dispatch(photosFailed(error.message)))
  };
};
