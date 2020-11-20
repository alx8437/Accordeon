import React from "react";
import {UncontrolledOnOf} from "./UncontrolledOnOf";
import {action} from "@storybook/addon-actions";

export default {
    title: "UncontrolledOnOf",
    component: UncontrolledOnOf
}

const callback = action("toggle changed")

export const OnToggle = () => <UncontrolledOnOf defaultValue={true} setToggle={callback} />
export const OffToggle = () => <UncontrolledOnOf defaultValue={false} setToggle={callback} />




