import { UtilityHelper } from "../helpers/UtilityHelper";

const setCookie = ({
  value = "",
  name = "",
  expire = "1 day",
  needExpire = true,
}) => {
  if (needExpire) {
    var d = new Date();
    d.setTime(d.getTime() + UtilityHelper.timeToMiliSecond(expire));
    document.cookie = `${name}=${value};expires=${d.toUTCString()}; Secure; path=/`;
  } else {
    document.cookie = `${name}=${value}; Secure; path=/`;
  }
};
const getCookie = (name = "") => {
  name = `${name}=`;
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
};
export { setCookie, getCookie };
