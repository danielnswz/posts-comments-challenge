import { get as _get } from 'lodash';
import { createSelector } from 'reselect';

export const getAuthors = (state) => state.authors;

export const getAuthorLoading = createSelector(
	[getAuthors],
	({ loading }) => loading
);

export const getSelectedAuthor = createSelector([getAuthors], ({ selected }) =>
	_get(selected, 'id', null)
);

export const getAuthorsData = createSelector([getAuthors], ({ data }) => data);
