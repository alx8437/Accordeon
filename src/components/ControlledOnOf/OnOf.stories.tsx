import React, {useState} from "react";
import {OnOf} from "./OnOf";
import {action} from "@storybook/addon-actions";

export default {
    title: "OnOf",
    component: OnOf
}

const callback = action("on or off be clicked")

export const DefaultToggle = () => <OnOf on={false} setOnToggle={callback} />
export const OnToggle = () => <OnOf on={true} setOnToggle={callback} />
export const OffToggle = () => <OnOf on={false} setOnToggle={callback} />
export const ChangeToggle = () => {
    const [toggle, setOnToggle] = useState<boolean>(false)
    return <OnOf on={toggle} setOnToggle={setOnToggle} />
}

