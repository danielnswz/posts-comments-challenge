import * as actionTypes from "./PostsLists.actionTypes";
import { IError, IPost, IRequest, IResponse } from "./types";

export const fetchPosts = (id: number | null) => ({
  type: actionTypes.GET_POSTS,
  payload: { id },
});

export const apiRequest = ({ method, url, list = true }: IRequest) => ({
  type: list ? actionTypes.API_REQUEST_LIST : actionTypes.API_REQUEST,
  payload: { meta: { method, url } },
});

export const apiSuccess = ({ response, list = true }: IResponse) => ({
  type: list ? actionTypes.API_SUCCESS_LIST : actionTypes.API_SUCCESS,
  payload: { response },
});

export const apiError = ({ error, list = true }: IError) => ({
  type: list ? actionTypes.API_FAILURE_LIST : actionTypes.API_FAILURE,
  payload: { error },
});

export const setPosts = (data: IPost[]) => {
  const dataNormalized = data.reduce((ac: any, cv: any) => {
    return {
      ...ac,
      [cv.id]: { ...cv, comments: [] },
    };
  }, {});
  return {
    type: actionTypes.SET_POSTS,
    payload: dataNormalized,
  };
};

export const setSelectedPost = (data: IPost[]) => {
  return {
    type: actionTypes.SET_POSTS,
    payload: data,
  };
};
