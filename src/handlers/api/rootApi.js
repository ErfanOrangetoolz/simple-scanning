import { getCookie } from "../cookie/CookieHandler";
import { CookieVariables } from "../cookie/Variables";
import { UtilityHelper } from "../helpers/UtilityHelper";

const checkInternet = () => {
  let status = true;
  let container = document.getElementById("meis_interner_connect_container");
  if (container !== undefined) {
    status = UtilityHelper.hasInternetConnection();
    if (!status) {
      container.classList.add("meis_icc_no_internet");
    } else {
      container.classList.remove("meis_icc_no_internet");
    }
  }
  return status;
};
const prepareHeader = (data = {}) => {
  let header_data = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  if (data.header !== undefined) {
    header_data = { ...header_data, ...data.header };
  }
  if (
    data.bearerToken.isEmpty() ||
    (data.bearerToken !== undefined && data.bearerToken)
  ) {
    let token = "";
    if (!data.token.isEmpty()) {
      token = data.token;
    } else {
      token = getCookie(CookieVariables.meis_token);
    }
    header_data["Authorization"] = "Bearer " + token;
  }
  return header_data;
};
const requestProps = (data = {}, method = "GET", postData = null) => {
  let signal = null,
    abortRequest = null;
  if (data.abortController != null) {
    signal = data.abortController.signal;
    abortRequest = setTimeout(() => {
      if (data.abortController) {
        data.abortController.abort();
        clearTimeout(abortRequest);
      }
    }, 30000);
  }
  const obj = {
    signal,
    method: method,
    headers: prepareHeader(data),
    referrerPolicy: "origin",
  };
  if (postData != null) {
    obj["body"] = JSON.stringify(postData);
  }
  return {
    props: obj,
    abortRequest: abortRequest,
  };
};
const handleCatch = (error, data, abortRequest) => {
  if (abortRequest) {
    clearTimeout(abortRequest);
  }
  if (data.rawRequest !== undefined) {
    UtilityHelper.exceptionHandler(error, data);
  }
};
const urlModifier = (url = "", params = {}) => {
  let modifiedUrl = url;
  for (const identifier in params) {
    let regex = new RegExp(`:${identifier}`, "g");
    modifiedUrl = modifiedUrl.replace(regex, params[identifier]);
  }
  return modifiedUrl;
};
const makeUrl = (url = "", params = {}) => {
  let modifiedUrl = url;
  if (JSON.stringify(params) === JSON.stringify({})) {
    return modifiedUrl;
  }
  modifiedUrl += "?";
  for (const identifier in params) {
    modifiedUrl += `${identifier}=${params[identifier]}&`;
  }
  return modifiedUrl;
};

const getRequest = (
  url,
  data = {
    abortController: null,
    bearerToken: true,
    header: {},
    token: "",
    rawRequest: null, //request info will be here for log
  }
) => {
  if (!checkInternet()) {
    return;
  }
  const props = requestProps(data);
  const abortRequest = props.abortRequest;
  return fetch(url, props.props)
    .then((response) => response.json())
    .then((responseData) => responseData)
    .catch((error) => handleCatch(error, data, abortRequest));
};
const postRequest = (
  url,
  postData,
  data = {
    abortController: null,
    bearerToken: true,
    header: {},
    token: "",
    rawRequest: null, //request info will be here for log
  }
) => {
  if (!checkInternet()) {
    return;
  }
  const props = requestProps(data, "POST", postData);
  const abortRequest = props.abortRequest;
  return fetch(url, props.props)
    .then((response) => response.json())
    .then((responseData) => responseData)
    .catch((error) =>
      handleCatch(error, { ...data, ...postData }, abortRequest)
    );
};
export { urlModifier, makeUrl, getRequest, postRequest };
