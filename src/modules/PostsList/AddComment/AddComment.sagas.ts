import { put, select, takeLatest } from "@redux-saga/core/effects";
import { ActionType } from "@redux-saga/types";
import { getPostsData } from "../PostsLists.selectors";
import { setCommentAction } from "./AddComment.actionCreators";
import * as actionTypes from "./AddComment.actionTypes";
import { v4 as uuidv4 } from "uuid";
import { IComment } from "../types";

interface IAddCommentFlow {
  payload: IComment;
}
function* addCommentFlow({ payload: data }: IAddCommentFlow): any {
  const posts = yield select(getPostsData);
  const newComment = {
    id: uuidv4(),
    ...data,
  };
  const comments = [...(posts?.[data?.postId]?.comments || []), newComment];
  const dataNormalized = {
    ...posts,
    [data?.postId]: {
      ...posts[data?.postId],
      comments,
    },
  };
  return yield put(setCommentAction(dataNormalized));
}

export function* addCommentSagas() {
  yield takeLatest<ActionType, any>(actionTypes.ADD_COMMENT, addCommentFlow);
}
