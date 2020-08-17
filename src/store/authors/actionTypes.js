export const feature = '[authors]';

//* ACTION TYPES *//
// Command actions
export const GET_AUTHORS = `${feature} GET_AUTHORS`;
export const SELECT_AUTHOR = `${feature} SELECT_AUTHOR`;

// Event actions
export const API_REQUEST = `${feature} API_REQUEST`;
export const API_SUCCESS = `${feature} API_SUCCESS`;
export const API_FAILURE = `${feature} API_FAILURE`;

// Document actions(this actions always report to our reducer)
export const SET_AUTHORS = `${feature} SET_AUTHORS`;
export const SET_SELECTED_AUTHOR = `${feature} SET_SELECTED_AUTHOR`;
