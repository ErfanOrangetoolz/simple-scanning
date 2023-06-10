import * as Action from "./ActionTypes";
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case Action.HANDLE_STATES:
      return { ...state, ...payload };

    case Action.HANDLE_LOGGED_IN_COOKIE:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
        pass: payload.pass,
        token: payload.token,
      };

    case Action.STORE_USER:
      return {
        ...state,
        user: payload,
      };

    case Action.STORE_PASS:
      return {
        ...state,
        pass: payload,
      };

    case Action.HANDLE_LOG_IN_SUBMIT:
      return {
        ...state,
        isSubmitLogin: true,
      };
    case Action.HANDLE_LOG_IN_SUBMIT_SUCCESS:
      return {
        ...state,
        token: payload.token,
        isLoggedIn: true,
        isSubmitLogin: false,
      };
    case Action.HANDLE_LOG_IN_SUBMIT_FAILED:
      return {
        ...state,
        isSubmitLogin: false,
      };

    case Action.HANDLE_DATA_LOAD_SUCCESS:
      return {
        ...state,
        isLoadingItem: false,
        isRefreshing: false,
        list: payload.data,
        lastData: payload.lastData,
      };

    case Action.HANDLE_DATA_LOAD_FAILED:
      return {
        ...state,
        isLoadingItem: false,
        isRefreshing: false,
      };

    default:
      return state;
  }
};
export default reducer;
