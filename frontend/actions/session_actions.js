import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = payload => ({
  type: RECEIVE_CURRENT_USER,
  payload
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearError = () => ({
  type: CLEAR_ERRORS
});

export const signup = user => dispatch => (
  APIUtil.signup(user).then(payload => (
    dispatch(receiveCurrentUser(payload))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(payload => (
    dispatch(receiveCurrentUser(payload))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(payload => (
    dispatch(receiveCurrentUser({ product: null, user: null }))
  ))
);

export const fetchUser = (id) => dispatch => (
  APIUtil.fetchUser(id).then(payload => (
    dispatch(receiveCurrentUser(payload))
  ))
);
