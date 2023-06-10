import CustomCircleLoader from "../../components/Loader/CustomCircleLoader";
import {
  Button,
  Input,
  Texts,
  Validation,
} from "../../constants/TextConstants";
import LoginService from "../../handlers/api/loginModule";
import { UtilityHelper } from "../../handlers/helpers/UtilityHelper";
import { useCentralContext } from "../../reducerContext/CentralReducer";
import {
  handleLoginSubmitAction,
  storePassAction,
  storeUserAction,
} from "../../reducerContext/app/Actions";
import styles from "./style.module.css";

const LoginIndex = () => {
  const { appStates: states, dispatch } = useCentralContext();
  const { isSubmitLogin, user, pass, token } = states;

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (isSubmitLogin) {
      return;
    }
    if (user.isEmpty()) {
      UtilityHelper.showNotification("WARNING", Validation.login_user);
      return;
    }
    if (pass.isEmpty()) {
      UtilityHelper.showNotification("WARNING", Validation.login_pass);
      return;
    }
    dispatch(handleLoginSubmitAction());
    LoginService.submitLogin(
      {
        userName: user,
        password: pass,
      },
      dispatch,
      token
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.formBody}>
        <h2 className={styles.header}>{Texts.loginHeader}</h2>
        <div className={styles.inputWrp}>
          <span className={styles.inputTitle}>{Texts.loginUser}</span>
          <input
            className={styles.input}
            placeholder={Input.login_user}
            onChange={(e) => dispatch(storeUserAction(e.target.value))}
            defaultValue={user}
          />
        </div>
        <div className={styles.inputWrp}>
          <span className={styles.inputTitle}>{Texts.loginPass}</span>
          <input
            type='password'
            className={styles.input}
            placeholder={Input.login_pass}
            onChange={(e) => dispatch(storePassAction(e.target.value))}
            defaultValue={pass}
          />
        </div>

        <div className={styles.buttonWrp}>
          <div className={styles.button} onClick={handleButtonClick}>
            {isSubmitLogin && (
              <CustomCircleLoader
                className={styles.loader}
                size='extra-small'
                fill='#fff'
              />
            )}
            {!isSubmitLogin && (
              <span className={styles.buttonText}>{Button.login}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginIndex;
