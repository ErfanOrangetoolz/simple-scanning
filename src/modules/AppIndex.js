import { useEffect } from "react";
import { useCentralContext } from "../reducerContext/CentralReducer";
import { PageTitles } from "../constants/TextConstants";
import styles from "./styles.module.css";
import CustomLoader from "../components/Loader/CustomLoader";
import { UtilityHelper } from "../handlers/helpers/UtilityHelper";
import { handleStatesAction } from "../reducerContext/app/Actions";
import LoginIndex from "./login/LoginIndex";
import DashboardIndex from "./dashboard/DashboardIndex";

const AppIndex = () => {
  const { appStates: states, dispatch } = useCentralContext();
  const { pageLoading, isLoggedIn } = states;
  useEffect(() => {
    document.title = `${PageTitles.core} | ${PageTitles.wait}`;
    UtilityHelper.checkIsLoggedIn(isLoggedIn, dispatch);
    setTimeout(() => {
      dispatch(handleStatesAction({ pageLoading: false }));
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      className={`${styles.container} ${pageLoading ? styles.loading : null}`}
    >
      {pageLoading && <CustomLoader />}
      {!pageLoading && !isLoggedIn && <LoginIndex />}
      {!pageLoading && isLoggedIn && <DashboardIndex />}
    </div>
  );
};
export default AppIndex;
