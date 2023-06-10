import { Error } from "../../constants/TextConstants";
import {
  handleGetItemFailedAction,
  handleGetItemSuccessAction,
} from "../../reducerContext/app/Actions";
import {
  executeGetFunction,
  getEachItemAction,
  getItemActions,
} from "../firebase/getFuctions";
import { UtilityHelper } from "../helpers/UtilityHelper";

class ListModuleService {
  getListData(params, dispatch) {
    executeGetFunction(getItemActions, params)
      .then((res) => {
        dispatch(handleGetItemSuccessAction(res));
      })
      .catch((e) => {
        dispatch(handleGetItemFailedAction());
        UtilityHelper.showNotification("ERROR", Error.went_wrong);
      });
  }
  getOneItem(id) {
    return executeGetFunction(getEachItemAction, id)
      .then((res) => {
        if (res.status === "success" && res.data != null) {
          return res.data;
        } else {
          UtilityHelper.showNotification("ERROR", res.message);
          return null;
        }
      })
      .catch((e) => {
        UtilityHelper.showNotification("ERROR", Error.went_wrong);
        return null;
      });
  }
}
const ListService = new ListModuleService();
export default ListService;
