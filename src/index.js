import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import InitPrototype from "./prototypes/InitPrototype";
import "./handlers/firebase";
import { InitNotification } from "./components/notification/Notification";
import "./components/notification/style.css";

const root = ReactDOM.createRoot(
  document.getElementById("my__base__structure__root")
);
InitPrototype.init();
InitNotification();
root.render(<App />);
