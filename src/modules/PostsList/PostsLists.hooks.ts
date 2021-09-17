import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./PostsLists.actionCreators";
import {
  getPostsData,
  getPostsErrors,
  getPostsLoading,
  getSelectedPostLoading,
} from "./PostsLists.selectors";
import {
  useAppSelector as useSelector,
  useAppDispatch as useDispatch,
} from "../common/hooks";
import { IPost } from "./types";

interface HookResponse {
  posts: IPost[];
  isPostsLoading: boolean;
  isSelectedPostLoading: boolean;
  errors: any;
}

export const usePostsList = (selectedPostId: number | null): HookResponse => {
  const dispatch = useDispatch();
  const posts = useSelector<IPost[]>(getPostsData);
  const isPostsLoading = useSelector<boolean>(getPostsLoading);
  const isSelectedPostLoading = useSelector<boolean>(getSelectedPostLoading);
  const errors = useSelector(getPostsErrors);

  useEffect(() => {
    dispatch(fetchPosts(null) as any);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (selectedPostId) {
      dispatch(fetchPosts(selectedPostId) as any);
    }
  }, [selectedPostId, dispatch]);

  return {
    posts,
    isPostsLoading,
    isSelectedPostLoading,
    errors,
  };
};
