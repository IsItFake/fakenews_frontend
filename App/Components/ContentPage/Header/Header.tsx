import * as React from "react";

import BaseComponent from "./../../BaseComponent";

const styles: any = require("./Header.component.less");

export default class Header extends BaseComponent<{
    isActive: boolean,
    title: string,
}, {}> {
    doRender(): React.ReactElement<{}> {
        if (!this.props.isActive) {
            return null;
        }

        return (
            <div className={styles.container}>
                <div className={styles.title}>{this.props.title}</div>
            </div>
        );
    }
}
