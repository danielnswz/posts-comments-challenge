import * as actionTypes from "./AddComment.actionTypes";

/* MOVE THIS TO A SAGA */
export const addCommentAction = (id: number | null, data: any) => {
  return {
    type: actionTypes.ADD_COMMENT,
    payload: { id, data },
  };
};

export const setCommentAction = ({ data }: any) => {
  return {
    type: actionTypes.SET_COMMENT,
    payload: data,
  };
};
