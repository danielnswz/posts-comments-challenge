import { authorsReducer, initialState } from '../reducer';

describe('authors reducer', () => {
	it('should return initial state', () => {
		expect(
			authorsReducer(initialState, { type: 'no type', payload: null })
		).toEqual(initialState);
	});
});
