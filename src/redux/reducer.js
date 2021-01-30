import { combineReducers } from "redux";
import { InitialContactForm } from "./forms";
import { createForms } from "react-redux-form";
import * as actionTypes from "./actionTypes";

const photoReducer = (
  photoState = { isLoading: false, photos: [], errMsg:null },
  action
) => {
  switch (action.type) {
    case actionTypes.PHOTOS_LOADING:
      return {
        ...photoState,
        errMsg:null,
        isLoading: true,
        photos: [],
      };
    case actionTypes.LOAD_PHOTOS:
      return {
        ...photoState,
        isLoading: false,
        errMsg:null,
        photos: action.payload,
      };
      case actionTypes.PHOTOS_FAILED:
        return{
          ...photoState,
          isLoading: false,
          errMsg:action.payload,
          photos: [],
        }
    default:
      return photoState;
  }
};

const commentReducer = (
  commentState = { isLoading: true, comments: [] },
  action
) => {
  switch (action.type) {
    case actionTypes.LOAD_COMMENTS:
      return {
        ...commentState,
        isLoading: false,
        comments: action.payload,
      };
    case actionTypes.COMMENT_LOADING:
      return {
        ...commentState,
        isLoading: true,
        comments: [],
      };
    case actionTypes.ADD_COMMENT:
      let comment = action.payload;
      return {
        ...commentState,
        comments: commentState.comments.concat(comment),
      };
    default:
      return commentState;
  }
};

export const Reducer = combineReducers({
  photos: photoReducer,
  comments: commentReducer,
  ...createForms({
    feedback: InitialContactForm,
  }),
});
