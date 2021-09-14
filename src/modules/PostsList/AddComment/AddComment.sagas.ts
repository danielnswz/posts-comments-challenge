import { put, select, takeLatest } from "@redux-saga/core/effects";
import { ActionType } from "@redux-saga/types";
import { getPostsData } from "../PostsLists.selectors";
import { setCommentAction } from "./AddComment.actionCreators";
import * as actionTypes from "./AddComment.actionTypes";

interface IAddCommentFlow {
  payload: {
    id: number | null;
    data: any;
  };
}
function* addCommentFlow({ payload: { id, data } }: IAddCommentFlow): any {
  if (id) {
    const posts = yield select(getPostsData);
    const newComment = {
      id: posts?.[id]?.comments?.length + 1 || 1,
      local: true,
      ...data,
    };
    const comments = (posts?.[id]?.comments || []) as Array<any>;
    comments.push(newComment);
    const dataNormalized = {
      ...posts,
      [id]: {
        ...posts[id],
        comments,
      },
    };
    return yield put(setCommentAction({ data: dataNormalized }));
  }

  return;
}

export function* addCommentSagas() {
  yield takeLatest<ActionType, any>(actionTypes.ADD_COMMENT, addCommentFlow);
}
