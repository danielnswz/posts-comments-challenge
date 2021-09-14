export const feature = '[posts]';

//* ACTION TYPES *//
// Command actions
export const GET_POSTS = `${feature} GET_POSTS`;
export const GET_SELECTED_POST = `${feature} GET_SELECTED_POST`;
export const SEARCH_POST = `${feature} SEARCH_POST`;

// Event actions
export const API_REQUEST = `${feature} API_REQUEST`;
export const API_SUCCESS = `${feature} API_SUCCESS`;
export const API_FAILURE = `${feature} API_FAILURE`;
export const API_REQUEST_LIST = `${feature} API_REQUEST_LIST`;
export const API_SUCCESS_LIST = `${feature} API_SUCCESS_LIST`;
export const API_FAILURE_LIST = `${feature} API_FAILURE_LIST`;

// Document actions(this actions always report to our reducer)
export const SET_POSTS = `${feature} SET_POSTS`;
export const SET_SELECTED_POST = `${feature} SET_SELECTED_POST`;
