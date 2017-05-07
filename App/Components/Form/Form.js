import * as React from "react";
import BaseComponet from "../BaseComponent";
const styles = require("./Form.component.less");
export default class Form extends BaseComponet {
    doRender() {
        return (React.createElement("div", { className: styles.container },
            React.createElement("form", { method: "get" },
                React.createElement("label", { htmlFor: "fakeInput" }, "URL to Test:"),
                React.createElement("input", { type: "text", name: "testURL", placeholder: "http://www.fakenews.xyz" }),
                React.createElement("button", { type: "submit" }, "Fake ??"))));
    }
}
//# sourceMappingURL=Form.js.map