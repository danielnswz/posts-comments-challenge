import { call, put, takeLatest } from 'redux-saga/effects';
import RequestService from '../../utils/RequestService';
import * as actions from './actionCreators';
import * as actionTypes from './actionTypes';

function* getAuthorsRequest() {
	const url = '/authors';
	const method = 'get';
	const applicationComponent = 'employee';
	const { feature } = actionTypes;

	yield put(actions.apiRequest({ method, url, feature, applicationComponent }));

	try {
		const { response } = yield call(RequestService, {
			method,
			url,
		});

		if (response.success) {
			return yield put(actions.apiSuccess({ response: response.payload }));
		}

		const error =
			response.messages.length > 0
				? response.messages[0]
				: 'Authors not available';
		return yield put(
			actions.apiError({
				error,
			})
		);
	} catch (error) {
		const message =
			error &&
			error.response &&
			error.response.data &&
			error.response.data.messages &&
			error.response.data.messages.length > 0
				? error.response.data.messages[0]
				: 'Service unavailable.';

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
