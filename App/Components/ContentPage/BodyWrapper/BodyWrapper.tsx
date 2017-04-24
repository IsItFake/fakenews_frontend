import * as React from "react";

import BaseComponent from "./../../BaseComponent";
import Advert from "./../../Advert/Advert";
import Form from "../../Form/Form";
import Results from "../../Results/Results";

const styles: any = require("./BodyWrapper.component.less");

interface IBodyWrapperProps extends React.Props<{}> {
    title: string;
}

export default class BodyWrapper extends BaseComponent<IBodyWrapperProps, {}> {
    doRender(): React.ReactElement<{}> {
        return (
            <div>
                <Form />

                <Advert title={"Advert 1"} content={"Advert"} id={"ad1"} />

                <Results results={false} />

                <Advert title={"Advert 2"} content={"Advert"} id={"ad2"} />
            </div>
        );
    }
}
