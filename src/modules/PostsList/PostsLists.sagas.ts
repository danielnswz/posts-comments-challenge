import { ActionType } from "@redux-saga/types";
import { get as _get } from "lodash";
import { Action } from "redux";
import { call, put, takeLatest, delay, select } from "redux-saga/effects";
import RequestService from "../../utils/RequestService";
import * as actions from "./PostsLists.actionCreators";
import * as actionTypes from "./PostsLists.actionTypes";
import { getPostsData } from "./PostsLists.selectors";

interface IGetPostRequest {
  data: { id: number | null };
}
function* getPostRequest({ data: { id } }: IGetPostRequest): any {
  const commentsUrl = id ? `/${id}/comments` : "";
  const url = `/posts${commentsUrl}`;
  const method = "get";

  yield put(actions.apiRequest({ method, url, list: !commentsUrl }));

  const { response } = yield call(RequestService, {
    method,
    url,
  });

  yield delay(1000);

  if (response) {
    return yield put(
      actions.apiSuccess({ response, list: !commentsUrl }) as Action
    );
  }

  const error = _get(response, "data.messages[0]", "Search post failed.");

  return yield put(
    actions.apiError({
      error,
      list: !commentsUrl,
    })
  );
}

/* WATCHER */
interface IGetPostsFlow {
  payload: {
    id: number | null;
  };
}
function* getPostsFlow({ payload: { id } }: IGetPostsFlow): any {
  const list = yield select(getPostsData);
  const areLocal = (list[String(id)]?.comments || []).every(
    (el: any) => el?.local
  );
  if (!list[String(id)]?.comments?.length || areLocal) {
    const {
      payload: { error = "", response },
    } = yield call(getPostRequest, { data: { id } });

    if (!error) {
      return yield put(
        !id
          ? actions.setPosts({ data: response })
          : actions.setSelectedPost({ list, data: response })
      );
    }
  }
}

export function* postListsSagas() {
  yield takeLatest<ActionType, any>(actionTypes.GET_POSTS, getPostsFlow);
}
