import { createSelector } from 'reselect';
import { orderBy as _orderBy } from 'lodash';

export const getPublications = (state) => state.publications;

export const getPublicationsLoading = (state) => {
	const { loading } = getPublications(state);
	return loading;
};

export const getSearchTerms = (state) => {
	const { searchTerms } = getPublications(state);
	return searchTerms;
};

export const getPublicationErrors = (state) => {
	const { errors } = getPublications(state);
	return errors;
};

export const getSortBy = (state) => {
	const { sort } = getPublications(state);
	return sort;
};

export const getPublicationsData = createSelector(
	[getPublications, getSortBy],
	({ data }, sortBy) => {
		return sortBy ? _orderBy(data, 'createdAt', sortBy) : data;
	}
);

export const getSelectedPublication = (state) => {
	const { selected } = getPublications(state);
	return selected;
};
