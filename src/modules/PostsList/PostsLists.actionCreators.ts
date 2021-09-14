import * as actionTypes from "./PostsLists.actionTypes";

export const fetchPosts = (id: number | null) => ({
  type: actionTypes.GET_POSTS,
  payload: { id },
});

export const fetchSelectedPost = ({ id, history }: any) => ({
  type: actionTypes.GET_SELECTED_POST,
  payload: { id, history },
});

export const apiRequest = ({ method, url, list = true }: any) => ({
  type: list ? actionTypes.API_REQUEST_LIST : actionTypes.API_REQUEST,
  payload: { meta: { method, url } },
});

export const apiSuccess = ({ response, list = true }: any) => ({
  type: list ? actionTypes.API_SUCCESS_LIST : actionTypes.API_SUCCESS,
  payload: { response },
});

export const apiError = ({ error, list = true }: any) => ({
  type: list ? actionTypes.API_FAILURE_LIST : actionTypes.API_FAILURE,
  payload: { error },
});

export const setPosts = ({ data }: any) => {
  const dataNormalized = data.reduce((ac: any, cv: any) => {
    return {
      ...ac,
      [cv.id]: cv,
    };
  }, {});
  return {
    type: actionTypes.SET_POSTS,
    payload: dataNormalized,
  };
};

export const setSelectedPost = ({ list, data }: any) => {
  const postId = data?.[0]?.postId;
  const dataNormalized = {
    ...list,
    [postId]: {
      ...list[postId],
      comments: [
        ...(list[postId]?.comments || []).map((el: any, index: number) => {
          return { ...el, id: data.length + index + 1 };
        }),
        ...data,
      ],
    },
  };
  return {
    type: actionTypes.SET_POSTS,
    payload: dataNormalized,
  };
};
