import { PageTitles } from "../../constants/TextConstants";
import {
  handleStatesAction,
  handleStoreCookieForLoginAction,
} from "../../reducerContext/app/Actions";
import { getCookie } from "../cookie/CookieHandler";
import { CookieVariables } from "../cookie/Variables";

const timeToMiliSecond = (time) => {
  const number = time.substring(0, time.indexOf(" "));
  switch (time.substr(time.indexOf(" ") + 1)) {
    case "day":
      return number * 24 * 60 * 60 * 1000;
    case "hour":
      console.log("here");
      return number * 60 * 60 * 1000;
    case "minute":
      return number * 60 * 1000;
    case "second":
      return number * 1000;
    default:
      return number * 60 * 1000;
  }
};
const hasInternetConnection = () => {
  // var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  // var type = connection.effectiveType;
  // console.log("connection", connection)
  // console.log("type", type)
  return window.navigator.onLine;
};
const exceptionHandler = (error, data) => {
  console.log({ error, data });
};
export const checkIsLoggedIn = (stateFlag, dispatch) => {
  if (stateFlag) {
    dispatch(
      handleStatesAction({
        isLoggedIn: true,
      })
    );
    document.title = `${PageTitles.core} | ${PageTitles.list}`;
    return;
  } else {
    const cookie = getCookie(CookieVariables.meis_token);
    if (cookie) {
      try {
        const data = JSON.parse(atob(cookie));
        dispatch(handleStoreCookieForLoginAction(data));
        document.title = `${PageTitles.core} | ${PageTitles.list}`;
        return;
      } catch (e) {}
    }
  }
  document.title = `${PageTitles.core} | ${PageTitles.login}`;
  dispatch(
    handleStatesAction({
      isLoggedIn: false,
    })
  );
};
export const showNotification = (type, message) => {
  window.showNotification(type, message);
};
export const UtilityHelper = {
  timeToMiliSecond,
  hasInternetConnection,
  exceptionHandler,
  checkIsLoggedIn,
  showNotification,
};
