import * as React from "react";
import BaseComponent from "./../../BaseComponent";
const styles = require("./Footer.component.less");
export default class Footer extends BaseComponent {
    doRender() {
        return (React.createElement("div", { className: styles.container }, "\u00A9 2017 IsItFake.xyz"));
    }
}
//# sourceMappingURL=Footer.js.map