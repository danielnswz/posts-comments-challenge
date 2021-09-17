import { IComment, IPost } from "../types";
import * as actionTypes from "./AddComment.actionTypes";

export const addCommentAction = (data: IComment) => {
  return {
    type: actionTypes.ADD_COMMENT,
    payload: data,
  };
};

export const setCommentAction = (data: IPost[]) => {
  return {
    type: actionTypes.SET_COMMENT,
    payload: data,
  };
};
