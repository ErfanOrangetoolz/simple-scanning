import React from "react";
import { CentralReducer } from "./reducerContext/CentralReducer";
import AppIndex from "./modules/AppIndex";

function App() {
  return (
    <CentralReducer>
      <AppIndex />
    </CentralReducer>
  );
}
export default App;
