import { get as _get } from 'lodash';
import { createSelector } from 'reselect';

export const getAuthors = (state) => state.authors;

export const getAuthorLoading = (state) => {
	const { loading } = getAuthors(state);
	return loading;
};

export const getSelectedAuthor = createSelector([getAuthors], ({ selected }) =>
	_get(selected, 'id', null)
);

export const getAuthorsData = (state) => {
	const { data } = getAuthors(state);
	return data;
};
