import * as React from "react";
import BaseComponent from "../BaseComponent";
const styles = require("./Advert.component.less");
export default class Advert extends BaseComponent {
    doRender() {
        return (React.createElement("div", { className: styles.wrapper, id: this.props.id },
            React.createElement("div", { className: styles.title }, this.props.title),
            React.createElement("div", { className: styles.content }, this.props.content)));
    }
}
//# sourceMappingURL=Advert.js.map