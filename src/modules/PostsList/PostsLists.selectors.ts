import { createSelector } from 'reselect';

export const getPosts = (state: { posts: any; }) => state.posts;

export const getPostsLoading = (state: any) => {
	const { loading } = getPosts(state);
	return loading;
};

export const getPostsErrors = (state: any) => {
	const { errors } = getPosts(state);
	return errors;
};

export const getPostsData = createSelector(
    [getPosts],
    ({data}) => data
)

export const getSelectedPost = (state: any) => {
	const { selected } = getPosts(state);
	return selected;
};

export const getSelectedPostLoading = createSelector(
	[getSelectedPost],
    ({ loading }) => loading
)
