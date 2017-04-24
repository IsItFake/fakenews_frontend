var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { connect } from "react-redux";
import BaseComponent from "./../BaseComponent";
import Header from "./Header/Header";
import BodyWrapper from "./BodyWrapper/BodyWrapper";
const styles = require("./ContentPage.component.less");
let ContentPage = class ContentPage extends BaseComponent {
    doRender() {
        return (React.createElement("div", { className: styles.container },
            React.createElement(Header, { isActive: true, title: "Is It Fake ??" }),
            React.createElement(BodyWrapper, { ref: "contentBodyRef", title: this.props.bodyTitle },
                React.createElement("div", { className: styles.message }, "Tester"))));
    }
};
ContentPage = __decorate([
    connect(mapStateToProps, mapDispatchToProps)
], ContentPage);
function mapStateToProps(state) {
    return {
        bodyTitle: state.content.title,
    };
}
function mapDispatchToProps(dispatch) {
    return {};
}
export default ContentPage;
//# sourceMappingURL=ContentPage.js.map