import * as React from "react";

import BaseComponent from "./../../BaseComponent";
import Advert from "./../../Advert/Advert";
import Results from "../../Results/Results";

const styles: any = require("./BodyWrapper.component.less");

export default class BodyWrapper extends BaseComponent<{
    title: string,
}, {}> {
    doRender(): React.ReactElement<{}> {
        return (
            <div>
                <Advert title={"Advert 1"} content={"Advert"} id={"ad1"} />

                <Results />

                <Advert title={"Advert 2"} content={"Advert"} id={"ad2"} />
            </div>
        );
    }
}
