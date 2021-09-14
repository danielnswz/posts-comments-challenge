import * as actionTypes from "./PostsLists.actionTypes";
import * as commentActionTypes from "./AddComment/AddComment.actionTypes";

export const initialState = {
  data: {},
  errors: [],
  selected: {
    postId: null,
    loading: false,
    errors: [],
    data: null,
  },
  loading: false,
};
export const postsReducer = (state = initialState, { type, payload }: any) => {
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
    case actionTypes.SET_SELECTED_POST: {
      return {
        ...state,
        selected: {
          ...state.selected,
          data: payload,
          postId: payload?.[0].postId || null,
        },
      };
    }
    case actionTypes.API_REQUEST: {
      return { ...state, selected: { ...state.selected, loading: true } };
    }
    case actionTypes.API_SUCCESS: {
      return { ...state, selected: { ...state.selected, loading: false } };
    }
    case actionTypes.API_FAILURE: {
      return {
        ...state,
        selected: {
          ...state.selected,
          errors: [payload],
          loading: false,
        },
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
