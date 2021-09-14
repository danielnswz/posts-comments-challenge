import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./PostsLists.actionCreators";
import {
  getPostsData,
  getPostsLoading,
  getSelectedPost,
  getSelectedPostLoading,
} from "./PostsLists.selectors";

interface HookResponse {
  posts: Array<any>;
  isPostsLoading: boolean;
  selectedPost: any;
  isSelectedPostLoading: boolean;
}

/* function usePrevious(value: any) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
} */

export const usePostsList = (selectedPostId: number | null): HookResponse => {
  const dispatch = useDispatch();
  const posts = useSelector(getPostsData);
  const isPostsLoading = useSelector(getPostsLoading);
  const selectedPost = useSelector(getSelectedPost);
  const isSelectedPostLoading = useSelector(getSelectedPostLoading);
  //   const prevSelectedPostId = usePrevious(selectedPostId);

  useEffect(() => {
    dispatch(fetchPosts(selectedPostId));
  }, [selectedPostId, dispatch]);

  return {
    posts,
    isPostsLoading,
    selectedPost,
    isSelectedPostLoading,
  };
};
