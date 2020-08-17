export const feature = '[publications]';

//* ACTION TYPES *//
// Command actions
export const GET_PUBLICATIONS = `${feature} GET_PUBLICATIONS`;
export const GET_SELECTED_PUBLICATION = `${feature} GET_SELECTED_PUBLICATION`;
export const SEARCH_PUBLICATION = `${feature} SEARCH_PUBLICATION`;

// Event actions
export const API_REQUEST = `${feature} API_REQUEST`;
export const API_SUCCESS = `${feature} API_SUCCESS`;
export const API_FAILURE = `${feature} API_FAILURE`;

// Document actions(this actions always report to our reducer)
export const SET_PUBLICATIONS = `${feature} SET_PUBLICATIONS`;
export const SET_SEARCH_TERMS = `${feature} SET_SEARCH_TERMS`;
export const SET_SORT_BY = `${feature} SET_SORT_BY`;
export const SET_SELECTED_PUBLICATION = `${feature} SET_SELECTED_PUBLICATION`;
