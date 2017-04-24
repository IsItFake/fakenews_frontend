import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { configureStore } from "./Store/CreateStore";
const store = configureStore();
ReactDOM.render(React.createElement(Provider, { store: store },
    React.createElement(App, null)), document.getElementById("app"));
//# sourceMappingURL=Index.js.map