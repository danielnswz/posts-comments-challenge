import * as actionTypes from "./PostsLists.actionTypes";
import * as commentActionTypes from "./AddComment/AddComment.actionTypes";
import { PayloadAction } from "@reduxjs/toolkit";

interface IPostState {
  data: any;
  errors: any[];
  loading: boolean;
  selectedLoading: boolean;
}
export const initialState: IPostState = {
  data: {},
  errors: [],
  selectedLoading: false,
  loading: false,
};
export const postsReducer = (
  state = initialState,
  { type, payload }: PayloadAction
) => {
  switch (type) {
    case actionTypes.SET_POSTS: {
      return { ...state, data: payload };
    }
    case actionTypes.API_REQUEST_LIST: {
      return { ...state, loading: true };
    }
    case actionTypes.API_SUCCESS_LIST: {
      return { ...state, loading: false };
    }
    case actionTypes.API_FAILURE_LIST: {
      return {
        ...state,
        errors: [payload],
        loading: false,
      };
    }
    case actionTypes.API_REQUEST: {
      return { ...state, selectedLoading: true };
    }
    case actionTypes.API_SUCCESS: {
      return { ...state, selectedLoading: false };
    }
    case actionTypes.API_FAILURE: {
      return {
        ...state,
        errors: [payload],
        loading: false,
      };
    }
    case commentActionTypes.SET_COMMENT: {
      return {
        ...state,
        data: payload,
      };
    }
    default:
      return state;
  }
};
