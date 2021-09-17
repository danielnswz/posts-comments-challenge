import { createSelector } from "reselect";

export const getPosts = (state: { posts: any }) => state.posts;

export const getPostsLoading = (state: any) => {
  const { loading } = getPosts(state);
  return loading;
};

export const getPostsErrors = (state: any) => {
  const { errors } = getPosts(state);
  return errors;
};

export const getPostsData = createSelector([getPosts], ({ data }: any) => data);

export const getSelectedPost = (state: any) => {
  const { selected } = getPosts(state);
  return selected;
};

export const getSelectedPostLoading = (state: any) => {
  const { selectedLoading } = getPosts(state);
  return selectedLoading;
};
