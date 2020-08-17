import { get as _get } from 'lodash';
import { stringify } from 'query-string';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import RequestService from '../../utils/RequestService';
import { setSelectedAuthor } from '../authors/actionCreators';
import * as authorActionTypes from '../authors/actionTypes';
import { getSelectedAuthor } from '../authors/selectors';
import * as actions from './actionCreators';
import { setSearchTerms } from './actionCreators';
import * as actionTypes from './actionTypes';
import { getSearchTerms } from './selectors';

function* getPublicationRequest({ id }) {
	const url = `/publications/${id}`;
	const method = 'get';

	yield put(actions.apiRequest({ method, url }));

	try {
		const { response } = yield call(RequestService, {
			method,
			url,
		});

		if (response.success) {
			return yield put(actions.apiSuccess({ response: response.payload }));
		}

		const error = _get(response, 'messages[0]', 'Publications not available.');
		return yield put(
			actions.apiError({
				error,
			})
		);
	} catch (error) {
		const message = _get(
			error,
			'response.data.messages[0]',
			'Service unavailable.'
		);
		return yield put(
			actions.apiError({
				error: message,
			})
		);
	}
}
function* getPublicationFlow({ payload = { id: null } }) {
	const {
		payload: { error = '', response },
	} = yield call(getPublicationRequest, { id: payload.id });

	if (!error) {
		yield put(actions.setSelectedPublication({ data: response }));
	}
}
function* searchPublicationRequest({ data: { searchTerms, selectedAuthor } }) {
	let query = '';

	query = stringify(
		{ author: selectedAuthor, searchTerms },
		{
			skipNull: true,
			skipEmptyString: true,
		}
	);

	let url = '/publications';
	if (query.length) {
		url += `?${query}`;
	}
	const method = 'get';

	yield put(actions.apiRequest({ method, url }));

	const { response } = yield call(RequestService, {
		method,
		url,
	});

	if (response.success) {
		return yield put(actions.apiSuccess({ response: response.payload }));
	}

	const error = _get(
		response,
		'data.messages[0]',
		'Search publication failed.'
	);

	return yield put(
		actions.apiError({
			error,
		})
	);
}

/* WATCHER */
function* searchPublicationFlow({ payload: { searchTerms, selectedAuthor } }) {
	if (selectedAuthor !== undefined) {
		yield put(setSelectedAuthor({ id: selectedAuthor }));
	}
	if (searchTerms !== undefined) {
		yield put(setSearchTerms({ searchTerms }));
	}
	const terms = yield select(getSearchTerms);
	const author = yield select(getSelectedAuthor);
	const {
		payload: { error = '', response },
	} = yield call(searchPublicationRequest, {
		data: {
			searchTerms: terms,
			selectedAuthor: author,
		},
	});

	if (!error) {
		return yield put(actions.setPublications({ data: response }));
	}
}

export default function* () {
	yield takeLatest(actionTypes.GET_SELECTED_PUBLICATION, getPublicationFlow);
	yield takeLatest(actionTypes.SEARCH_PUBLICATION, searchPublicationFlow);
	yield takeLatest(authorActionTypes.SELECT_AUTHOR, searchPublicationFlow);
}
