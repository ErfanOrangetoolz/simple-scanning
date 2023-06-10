import { Error, PageTitles } from "../../constants/TextConstants";
import {
  handleLoginSubmitFailedAction,
  handleLoginSubmitSuccessAction,
} from "../../reducerContext/app/Actions";
import { setCookie } from "../cookie/CookieHandler";
import { CookieVariables } from "../cookie/Variables";
import { executeGetFunction, userLoginAction } from "../firebase/getFuctions";
import { UtilityHelper } from "../helpers/UtilityHelper";

class LoginModuleService {
  submitLogin(params, dispatch, token) {
    executeGetFunction(userLoginAction, params)
      .then((res) => {
        if (Array.isArray(res) && res.length === 0) {
          dispatch(handleLoginSubmitFailedAction());
          UtilityHelper.showNotification("ERROR", Error.login_auth);
        } else {
          document.title = `${PageTitles.core} | ${PageTitles.list}`;
          setCookie({
            value: res[0].token,
            name: CookieVariables.meis_token,
            needExpire: true,
          });
          dispatch(handleLoginSubmitSuccessAction(res[0]));
        }
      })
      .catch((e) => {
        dispatch(handleLoginSubmitFailedAction());
        UtilityHelper.showNotification("ERROR", Error.went_wrong);
      });
  }
  logout() {
    /* remove from cookie */
    /* change reduce state */
  }
}
const LoginService = new LoginModuleService();
export default LoginService;
