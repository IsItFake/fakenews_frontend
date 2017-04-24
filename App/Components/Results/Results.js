import * as React from "react";
import BaseComponent from "../BaseComponent";
const styles = require("./Results.component.less");
export default class Results extends BaseComponent {
    doRender() {
        if (this.props.results) {
            return (React.createElement("div", { className: styles.wrapper }, "Results"));
        }
        return React.createElement("div", { className: styles.wrapper }, "\u00A0");
    }
}
//# sourceMappingURL=Results.js.map