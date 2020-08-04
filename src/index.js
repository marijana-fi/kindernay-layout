import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "./animations.scss";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
