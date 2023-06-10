import {
  DefaultIcons,
  ErrorIcons,
  InfoIcons,
  SuccessIcons,
  WarningIcons,
} from "../../icons/NotificationIcons";
import { renderToString } from "react-dom/server";

export const NotificationHtmlTemplate = ({
  leftIcon = "",
  text = "text",
  des = "description",
  closeText = "",
  onClose = () => {},
  timer = 3000,
  classText = "info",
}) => {
  let new_interval = "",
    container = "";
  function handleOnCloseNotification() {
    clearInterval(new_interval);
    new_interval = "";
    container.classList.add("meis_nt_hide");
    onClose();
  }
  let element_exist = document.getElementById("meis_notification_wrp_id");
  if (element_exist) {
    if (element_exist.getAttribute("interval")) {
      clearInterval(element_exist.getAttribute("interval"));
      element_exist.setAttribute("interval", null);
    }
    if (!element_exist.classList.contains(classText)) {
      element_exist.classList.remove("info");
      element_exist.classList.remove("error");
      element_exist.classList.remove("success");
      element_exist.classList.remove("warning");
      element_exist.classList.remove("default");
      element_exist.classList.add(classText);
    }
    element_exist.classList.remove("meis_nt_hide");
    if (element_exist.classList.contains("meis_nt_replace")) {
      element_exist.classList.remove("meis_nt_replace");
    } else {
      element_exist.classList.add("meis_nt_replace");
    }
    setTimeout(() => {
      try {
        /* icon */
        let icon_span = element_exist.querySelector(
          "span[id=meis_nt_li_wrp_id]"
        );
        if (icon_span) {
          icon_span.innerHTML = leftIcon;
        }
        /* text */
        let message_span = element_exist.querySelector(
          "span[id=meis_nt_info_wrp_id]"
        );
        if (message_span) {
          message_span.innerHTML = `<b>${text}</b> ${des}`;
        }
        /* dismiss */
        let dismiss_span = element_exist.querySelector(
          "span[id=meis_nt_close_wrp_id]"
        );
        if (dismiss_span) {
          dismiss_span.innerText = closeText;
        }
        new_interval = setTimeout(() => {
          try {
            element_exist.classList.add("meis_nt_hide");
          } catch (error) {}
        }, timer);
        element_exist.setAttribute("interval", new_interval);
      } catch (error) {}
    }, 500);
  } else {
    const elm = `
      <div class="meis_nt_left_wrp" id="meis_nt_left_wrp_id">
        <span class="meis_nt_li_wrp" id="meis_nt_li_wrp_id">${leftIcon}</span>
        <span class="meis_nt_info_wrp" id="meis_nt_info_wrp_id"><b>${text}</b> ${des}</span>
      </div>
      <span class="meis_nt_close_wrp" id="meis_nt_close_wrp_id">${closeText}</span>
    `;
    container = document.createElement("div");
    container.className = "meis_notification_template";
    container.className = classText;
    container.id = "meis_notification_wrp_id";
    container.innerHTML = elm;
    document.body.appendChild(container);

    setTimeout(() => {
      container.classList.add("animate");
    }, 0);

    if (document.getElementById("meis_nt_close_wrp_id")) {
      document
        .getElementById("meis_nt_close_wrp_id")
        .addEventListener("click", handleOnCloseNotification);
    }

    new_interval = setTimeout(() => {
      try {
        if (document.getElementById("meis_nt_close_wrp_id")) {
          document
            .getElementById("meis_nt_close_wrp_id")
            .removeEventListener("click", handleOnCloseNotification);
        }
        container.classList.add("meis_nt_hide");
      } catch (error) {}
    }, timer);
    container.setAttribute("interval", new_interval);
  }
};

export const InitNotification = () => {
  window.showNotification = (
    type = "INFO",
    message = "Information",
    des = "",
    closeText = "Dismiss"
  ) => {
    console.log(type, message);
    /* 'SUCCESS' //ERROR, WARNING, INFO */
    let icon = <InfoIcons />,
      classText = "info";
    type = type.toUpperCase();
    if (type === "SUCCESS") {
      icon = <SuccessIcons />;
      classText = "success";
    } else if (type === "ERROR") {
      icon = <ErrorIcons />;
      classText = "error";
    } else if (type === "WARNING") {
      icon = <WarningIcons />;
      classText = "warning";
    } else {
      icon = <DefaultIcons />;
      classText = "default";
    }
    NotificationHtmlTemplate({
      leftIcon: renderToString(icon),
      text: "",
      des: message,
      closeText: closeText,
      timer: 3000,
      classText: classText,
    });
  };
};
