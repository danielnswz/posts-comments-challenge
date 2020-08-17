import { call, put, takeLatest } from 'redux-saga/effects';
import { get as _get } from 'lodash';
import RequestService from '../../utils/RequestService';
import * as actions from './actionCreators';
import * as actionTypes from './actionTypes';

function* getAuthorsRequest() {
	const url = '/authors';
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

		const error = _get(response, 'messages[0]', 'Authors not available.');

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
function* getAuthorsFlow() {
	const {
		payload: { error = '', response },
	} = yield call(getAuthorsRequest);

	if (!error) {
		yield put(actions.setAuthors({ data: response }));
	} else {
	}
}

export default function* () {
	yield takeLatest(actionTypes.GET_AUTHORS, getAuthorsFlow);
}
