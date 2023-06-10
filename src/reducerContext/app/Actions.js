import * as Action from "./ActionTypes";

export const handleStatesAction = (payload) => ({
  type: Action.HANDLE_STATES,
  payload: payload,
});
export const handleStoreCookieForLoginAction = (payload) => ({
  type: Action.HANDLE_LOGGED_IN_COOKIE,
  payload: payload,
});
/* login */
export const storeUserAction = (payload) => ({
  type: Action.STORE_USER,
  payload: payload,
});
export const storePassAction = (payload) => ({
  type: Action.STORE_PASS,
  payload: payload,
});
export const handleLoginSubmitAction = () => ({
  type: Action.HANDLE_LOG_IN_SUBMIT,
});
export const handleLoginSubmitSuccessAction = (payload) => ({
  type: Action.HANDLE_LOG_IN_SUBMIT_SUCCESS,
  payload: payload,
});
export const handleLoginSubmitFailedAction = () => ({
  type: Action.HANDLE_LOG_IN_SUBMIT_FAILED,
});
/* item */
export const handleGetItemSuccessAction = (payload) => ({
  type: Action.HANDLE_DATA_LOAD_SUCCESS,
  payload: payload,
});
export const handleGetItemFailedAction = () => ({
  type: Action.HANDLE_DATA_LOAD_FAILED,
});
