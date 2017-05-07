import * as React from "react";
import BaseComponent from "../BaseComponent";
import ResultSet from "./ResultSet/ResultSet";
const styles = require("./Results.component.less");
const inputKey = "testURL";
export default class Results extends BaseComponent {
    constructor() {
        super();
        this.state = {
            fakeURL: "",
        };
    }
    getResultSet() {
        const bob = "";
    }
    doRender() {
        const handleSubmit = (e) => {
            e.preventDefault();
            const fakeURL = this.refs[inputKey].value.trim();
            this.setState({ fakeURL });
        };
        return (React.createElement("div", { className: styles.wrapper },
            React.createElement("div", { className: styles.container },
                React.createElement("form", { method: "get", onSubmit: handleSubmit },
                    React.createElement("label", { htmlFor: "fakeInput" }, "URL to Test:"),
                    React.createElement("input", { type: "text", name: inputKey, placeholder: "http://www.fakenews.xyz", ref: inputKey }),
                    React.createElement("button", { type: "submit" }, "Fake ??"))),
            React.createElement("hr", null),
            React.createElement(ResultSet, { resultString: this.state.fakeURL })));
    }
}
//# sourceMappingURL=Results.js.map