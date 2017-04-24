import * as React from "react";

import BaseComponent from "../BaseComponent";

const styles: any = require("./Results.component.less");

interface IResultSetProps extends React.Props<{}> {
    fakeChance: number;
    fakeStatus: string;
    newsSource: string;
    siteLink: string;
}

interface IResultsProps extends React.Props<{}> {
    results: boolean;
}

export default class Results extends BaseComponent<IResultsProps, {}> {
    doRender(): React.ReactElement<{}> {
        if (this.props.results) {
            return (
                <div className={styles.wrapper}>
                    Results
                </div>
            );
        }

        return <div className={styles.wrapper}>&nbsp;</div>;
    }
}
