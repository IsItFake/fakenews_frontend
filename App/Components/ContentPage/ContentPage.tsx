import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import BaseComponent from "./../BaseComponent";
import Header from "./Header/Header";
import BodyWrapper from "./BodyWrapper/BodyWrapper";
import { StoreState } from "../../Store/StoreState";
import Footer from "./Footer/Footer";

const styles: any = require("./ContentPage.component.less");

interface IContentPageProps {
    bodyTitle?: string;
}

@connect(mapStateToProps, mapDispatchToProps)
class ContentPage extends BaseComponent<IContentPageProps, {}> {
    doRender(): React.ReactElement<{}> {
        return (
            <div className={styles.container}>
                <Header isActive={true} title={"Is It Fake ??"} />
                <BodyWrapper ref="contentBodyRef" title={this.props.bodyTitle} />
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state: StoreState): IContentPageProps {
    return {
        bodyTitle: state.content.title,
    };
}

function mapDispatchToProps(dispatch: Dispatch<{}>): IContentPageProps {
    return {};
}

export default ContentPage;
