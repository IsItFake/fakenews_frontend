import * as React from "react";
import BaseComponent from "./../../BaseComponent";
const styles = require("./Header.component.less");
export default class Header extends BaseComponent {
    doRender() {
        if (!this.props.isActive) {
            return null;
        }
        return (React.createElement("div", { className: styles.container },
            React.createElement("div", { className: styles.title }, this.props.title)));
    }
}
//# sourceMappingURL=Header.js.map