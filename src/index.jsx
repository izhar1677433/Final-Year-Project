import React from "react";

import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/index.css";
import RoomProvider from "./context/RoomContext";

// import room context

ReactDOM.createRoot(document.getElementById("root")).render(
  <RoomProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RoomProvider>
);
