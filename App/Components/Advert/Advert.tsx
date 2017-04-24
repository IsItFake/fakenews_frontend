import * as React from "react";
import BaseComponent from "../BaseComponent";

const styles: any = require("./Advert.component.less");

interface IAdvertProps extends React.Props<{}> {
    title: string;
    content: string;
    id: string;
}

export default class Advert extends BaseComponent<IAdvertProps, {}> {
    doRender(): React.ReactElement<{}> {
        return (
            <div className={styles.wrapper} id={this.props.id}>
                <div className={styles.title}>
                    {this.props.title}
                </div>
                <div className={styles.content}>
                    {this.props.content}
                </div>
            </div>
        );
    }
}
